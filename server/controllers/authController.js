const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { promisify } = require('util');
const bcrpyt = require('bcrypt');

const User = require('../models/userModel');
const Jobs = require('../models/jobsModel');
const Email = require('../utils/emails');
const Token = require('../models/tokenModel');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.signup = async (req, res) => {
  try {
    //Create and hash code
    const token = crypto.randomBytes(16).toString('hex');

    //Create user
    const user = await User.create(req.body);

    //Create Token doc
    await Token.create({
      userId: user.id,
      token,
    });

    //Send email with code //CHECK WHICH URL TO USE WHEN FRONT IS IMPLEMENTED
    new Email(user, `http://localhost:8000/verify/${token}`).verifyAccount();

    res.status(200).json({
      status: 'success',
      message: 'Email sent.',
      token, //UNTIL FRONT IS IMPLEMENTED
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.code === 11000 ? 'Email already in use.' : err.message,
    });
  }
};

exports.activateAccount = async (req, res) => {
  //Get and unhash code
  const token = await Token.findOne({
    token: req.params.token,
  });

  //Doesn't match => Error
  if (!token)
    return res
      .status(404)
      .json({ status: 'failed', message: 'Wrong or expired token.' });

  //Check if code matches with user
  const user = await User.findById(token.userId);

  //Doesn't exist => Error
  if (!user)
    return res
      .status(404)
      .json({ status: 'failed', message: 'The user no longer exist' });

  //Correct => verify user
  user.token = undefined;
  user.verified = true;

  await user.save({ validateBeforeSave: false });

  //Send welcome email
  new Email(user, `http://localhost:8000/me`).welcomeEmail();

  //Auth user
  createSendToken(user, 201, res);
};

exports.resendConfirmationEmail = (req, res) => {
  //Resend the confirmation email
};

exports.login = async (req, res) => {
  try {
    //Check that user exist
    const user = await User.findOne({
      email: req.body.email,
      verified: true,
    }).select('+password');
    //Check that email and password are correct
    if (!user || !(await bcrpyt.compare(req.body.password, user.password)))
      throw new Error('Email or password are incorrect');

    createSendToken(user, 201, res);
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err.message });
  }
};

exports.logout = (req, res) => {
  res.cookie('jwt', 'null', {
    expires: new Date(Date.now() - 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    status: 'success',
  });
};

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ').at(1);
  } else if (req.cookies.jwt) token = req.cookies.jwt;

  if (!token)
    return next(
      new Error('You are not logged in. Please log in to get access.')
    );

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);

  if (!user) return next(new Error('User does not exist anymore.'));

  if (decoded.iat < user.passwordChangedAt.getTime() / 1000)
    return next(new Error('Password has been changed. Logged in again.'));

  req.user = user;
  res.locals.user = user;

  next();
};

exports.postBelongsToUser = async (req, res, next) => {
  //CHECK THIS IMPLEMENTATION
  const jobPost = await Jobs.findById(req.params.id).populate('user', 'id');

  if (req.user.role !== 'admin' && jobPost.user.id !== req.user.id) {
    next(
      new Error(
        'This post does not belong to you. You can only delete your own jobs.'
      )
    );
  }
  next();
};

exports.onlyAdmin = (req, res, next) => {
  if (req.user.role !== 'admin')
    return next(new Error('This route is just for administrators.'));
  next();
};

exports.sendResetPasswordToken = async (req, res, next) => {
  //Check if user exist
  const user = await User.findOne({ email: req.body.email });

  if (!user) return next(new Error('No user with this email'));
  //Create a token
  const resetToken = crypto.randomBytes(32).toString('hex');
  //Store token in DB
  user.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  user.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  await user.save({ validateBeforeSave: false });

  //Send token email
  new Email(
    user,
    `http://localhost:8000/reset-password/${resetToken}`
  ).resetPasswordEmail();

  //Send token in res
  res.status(200).json({
    status: 'success',
    message: 'Token sent',
  });
};

exports.resetPassword = async (req, res, next) => {
  //Check if token is correct(we receive the non hash token in the url)
  const token = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  //Find the user
  const user = await User.findOne({
    passwordResetToken: token,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) return next(new Error('Invalid token or has expired.'));

  //Update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  res.status(200).json({
    status: 'success',
    data: null,
  });
};

exports.changePassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('password');

    if (!req.body.currentPassword)
      throw new Error('Must input current password');

    //Check that current password is correct
    const crrPassword = await bcrpyt.compare(
      req.body.currentPassword,
      user.password
    );

    if (!crrPassword) throw new Error('Invalid current password.');

    //Change password
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;

    await user.save({ validateBeforeSave: true });

    res.status(200).json({
      status: 'success',
      message: 'Password updated',
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err.message });
  }
};

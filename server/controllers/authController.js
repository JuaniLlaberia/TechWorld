const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { promisify } = require('util');
const bcrpyt = require('bcrypt');

const catchErrorAsync = require('../utils/catchErrorAsync');
const User = require('../models/userModel');
const Jobs = require('../models/jobsModel');
const Email = require('../utils/emails');
const Token = require('../models/tokenModel');
const CustomError = require('../utils/error');

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
    path: '/',
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    cookieOptions.sameSite = 'none';
    cookieOptions.secure = true;
  }

  res.cookie('jwt', token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    data: {
      user,
    },
  });
};

exports.signup = catchErrorAsync(async (req, res) => {
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
  new Email(
    user,
    `https://techworld-jobs.vercel.app/verify-email/${token}`
  ).verifyAccount();

  res.status(200).json({
    status: 'success',
    message: 'Email sent.',
  });
});

exports.activateAccount = catchErrorAsync(async (req, res, next) => {
  //Get and unhash code
  const token = await Token.findOne({
    token: req.params.token,
  });

  //Doesn't match => Error
  if (!token) return next(new CustomError('Wrong or expired token', 401));

  //Check if code matches with user
  const user = await User.findById(token.userId);

  //Doesn't exist => Error
  if (!user) return next(new CustomError('The user no longer exist', 404));

  //Correct => verify user
  user.verified = true;

  await user.save({ validateBeforeSave: false });

  //Send welcome email
  new Email(
    user,
    `https://techworld-jobs.vercel.app/me/information`
  ).welcomeEmail();

  //Auth user or make them login?
  createSendToken(user, 201, res);
});

exports.resendConfirmationEmail = catchErrorAsync(async (req, res, next) => {
  if (!req.body.email)
    return next(new CustomError('Missing email address.', 400));

  //Check if the user exist or not
  const user = await User.findOne({ email: req.body.email });

  if (!user)
    return next(
      new CustomError('This email is not registered. You can sing up.', 404)
    );

  if (user.verified)
    return next(
      new CustomError('This account has alerady been verified.', 404)
    );

  await Token.deleteMany({ userId: user.id });

  const token = crypto.randomBytes(16).toString('hex');

  await Token.create({
    userId: user.id,
    token,
  });

  new Email(
    user,
    `https://techworld-jobs.vercel.app/verify-email/${token}`
  ).verifyAccount();

  res.status(200).json({ status: 'success', message: 'Token sent to email.' });
});

exports.login = catchErrorAsync(async (req, res, next) => {
  //Check that user exist
  const user = await User.findOne({
    email: req.body.email,
  }).select('+password');

  //Check that email and password are correct
  if (!user || !(await bcrpyt.compare(req.body.password, user.password)))
    return next(new CustomError('Email or password are incorrect', 404));

  if (user.verified === false)
    return next(
      new CustomError(
        'Account needs verification (confirm your email or resend email).',
        404
      )
    );

  createSendToken(user, 201, res);
});

exports.logout = (req, res) => {
  const cookieOptions = {
    expires: new Date(Date.now() - 10 * 1000),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    cookieOptions.sameSite = 'none';
    cookieOptions.secure = true;
  }

  res.cookie('jwt', 'null', cookieOptions);

  res.status(200).json({
    status: 'success',
  });
};

exports.protect = catchErrorAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) token = req.cookies.jwt;

  if (!token)
    return next(
      new CustomError(
        'You are not logged in. Please log in to get access.',
        401
      )
    );

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);

  if (!user) return next(new CustomError('User does not exist anymore.', 404));

  if (decoded.iat < user.passwordChangedAt.getTime() / 1000)
    return next(
      new CustomError('Password has been changed. Logged in again.', 401)
    );

  req.user = user;
  res.locals.user = user;

  next();
});

exports.postBelongsToUser = catchErrorAsync(async (req, res, next) => {
  //CHECK THIS IMPLEMENTATION
  const jobPost = await Jobs.findById(req.params.id).populate('user', 'id');

  if (req.user.role !== 'admin' && jobPost.user.id !== req.user.id) {
    next(
      new CustomError(
        'This post does not belong to you. You can only delete your own jobs.',
        403
      )
    );
  }

  next();
});

exports.onlyAdmin = catchErrorAsync((req, res, next) => {
  if (req.user.role !== 'admin')
    return next(new CustomError('This route is just for administrators.', 401));
  next();
});

exports.sendResetPasswordToken = catchErrorAsync(async (req, res, next) => {
  //Check if user exist
  const user = await User.findOne({ email: req.body.email });

  if (!user) return next(new CustomError('No user with this email', 404));
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
    `https://techworld-jobs.vercel.app/reset-password/${resetToken}`
  ).resetPasswordEmail();

  //Send token in res
  res.status(200).json({
    status: 'success',
    message: 'Token sent',
  });
});

exports.resetPassword = catchErrorAsync(async (req, res, next) => {
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

  if (!user) return next(new CustomError('Invalid token or has expired.', 401));

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
});

exports.changePassword = catchErrorAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('password');

  if (!req.body.currentPassword)
    return next(new CustomError('Must input current password', 400));

  //Check that current password is correct
  const crrPassword = await bcrpyt.compare(
    req.body.currentPassword,
    user.password
  );

  if (!crrPassword)
    return next(new CustomError('Invalid current password', 404));

  //Change password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  await user.save({ validateBeforeSave: true });

  res.status(200).json({
    status: 'success',
    message: 'Password updated',
  });
});

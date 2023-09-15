const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const bcrpyt = require('bcrypt');

const User = require('../models/userModel');

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
    const user = await User.create(req.body);
    createSendToken(user, 201, res);
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    //Check that user exist
    const user = await User.findOne({ email: req.body.email }).select(
      '+password'
    );
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
    return next(new Error('User does not exist anymore.'));

  req.user = user;
  res.locals.user = user;

  next();
};

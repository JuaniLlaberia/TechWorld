const CustomError = require('../utils/error');

const handleDuplicateField = error => {
  if (error.keyPattern.hasOwnProperty('email'))
    return new CustomError('This email is already in use.', 409);

  return new CustomError(
    `Duplicate field: ${error.keyValue.name}. Please use another value.`
  );
};

const handleValidationError = error => {
  const errors = Object.values(error.errors).map(el => el.message);

  return new CustomError(`Invalid data. Errors: ${errors.join('. ')}`, 400);
};

const handleDuplicateIdError = error =>
  new CustomError(`Couldn't find ID (${error.value}) in DB.`, 404);

const handleTokenError = () =>
  new CustomError('Invalid token. Log in again', 401);

const handleTokenExpiration = () =>
  new CustomError('Token has expired. Log in again', 401);

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  let error = { ...err };
  error.message = err.message;
  error.name = err.name;

  console.log(error);

  if (error.code === 11000) error = handleDuplicateField(error);
  if (error.name === 'CastError') error = handleDuplicateIdError(error);
  if (error.name === 'ValidationError') error = handleValidationError(error);
  if (error.name === 'JsonWebTokenError') error = handleTokenError();
  if (error.name === 'TokenExpiredError') error = handleTokenExpiration();

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
};

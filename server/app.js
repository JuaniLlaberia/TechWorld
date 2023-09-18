//Application
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');

const CustomError = require('./utils/error');
const handleError = require('./controllers/errorController');
const jobsRouter = require('./routes/jobsRouter');
const userRouter = require('./routes/userRouter');
const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(
  express.json({
    limit: '10kb',
  })
);

app.use(compression());

//Routes
app.use('/api/jobs', jobsRouter);
app.use('/api/users', userRouter);

//Not Found endpoints/routes
app.all('*', (req, res, next) => {
  //If it receives an argument that means its an error
  next(new CustomError(`Can't find ${req.originalUrl} on this server.`, 404));
});

//Error handling middleware
app.use(handleError);

module.exports = app;

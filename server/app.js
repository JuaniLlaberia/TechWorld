//Application
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');

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

module.exports = app;

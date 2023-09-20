//Application
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');

const CustomError = require('./utils/error');
const handleError = require('./controllers/errorController');
const jobsRouter = require('./routes/jobsRouter');
const userRouter = require('./routes/userRouter');
const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//In case we want to make our API completly private just for our web
// app.use(cors({
//   origin: 'FRONT URL'
// }));

app.use(cors());
app.options('', cors());

app.use(helmet());

app.use(
  express.json({
    limit: '10kb',
  })
);

//ADD A RATE LIMIT ???

app.use(mongoSanitize());

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

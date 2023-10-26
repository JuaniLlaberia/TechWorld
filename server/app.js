//Application
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const CustomError = require('./utils/error');
const handleError = require('./controllers/errorController');
const jobsRouter = require('./routes/jobsRouter');
const userRouter = require('./routes/userRouter');
const articleRouter = require('./routes/articleRouter');

const app = express();
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(
  cors({
     origin: 'https://techworld-jobs.vercel.app',
   // origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.set('trust proxy', 1);

app.use(helmet());

app.use(
  express.json({
    limit: '10kb',
  })
);

app.use(mongoSanitize());

app.use(compression());

//Routes
app.use('/api/jobs', jobsRouter);
app.use('/api/users', userRouter);
app.use('/api/articles', articleRouter);

//Not Found endpoints/routes
app.all('*', (req, res, next) => {
  //If it receives an argument that means its an error
  next(new CustomError(`Can't find ${req.originalUrl} on this server.`, 404));
});

//Error handling middleware
app.use(handleError);

module.exports = app;

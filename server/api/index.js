//Server functionalities
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('../app');

//Connecting to MongoDB database using mongoose
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB was connected successfully!'));

//Starting server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App is running on port ${port} in ${process.env.NODE_ENV} mode`);
});

//Error handling

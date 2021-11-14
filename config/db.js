const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  console.log('Connecting');
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/calorieDB', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(colors.red(error.message));
  }
};

module.exports = connectDB;

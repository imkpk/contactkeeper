const mongoose = require("mongoose");
const config = require("config");

// bring mongoDB with config
const db = config.get("mongoURI");

//connect to the Db now

//process 1
/* const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => console.log("mongo db connected"))
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
}; */

//process 2 with async and await

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    const path = process.env.DB_URL;
    await mongoose.connect(path);
    console.log("Database is connected");
  } catch (error) {
    console.log({ message: error.message });
  }
};

module.exports = { connection };

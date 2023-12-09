const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const userModel = new mongoose.model("PharUser", userSchema);

module.exports = { userModel };

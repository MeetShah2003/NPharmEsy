const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/user.schema");
require("dotenv").config();

const signupPage = (req, res) => {
  return res.render("signup");
};

const signUp = async (req, res) => {
  let { username, password, email } = req.body;
  let user = await userModel.findOne({ email: email });
  if (user) {
    return res.status(400).redirect("/user/login");
  } else {
    bcrypt.hash(password, 7, async (err, hash) => {
      if (err) {
        console.log(err.message);
      } else {
        let user = await userModel.create({
          username,
          password: hash,
          email,
        });
        const token = jwt.sign({ id: user._id, email: user.email },process.env.JWT_SECRET);
        console.log(token);
        return res.status(200).cookie("token", token).redirect("/user/login");
      }
    });
  }
};

const loginPage = (req, res) => {
  return res.render("login");
};

const login = async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email: email });
  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.log(err.message);
      }
      if (result) {
        const token = jwt.sign({ id: user._id, email: user.email },process.env.JWT_SECRET);
        console.log(token);
        return res.status(200)
          .cookie("token", token)
          .redirect("/medicine");
      } else {
        return res.status(400).send({ message: "invalid password" });
      }
    });
  } else {
    return res.status(400).send({ message: "user not found" });
  }
};

module.exports = { signupPage, signUp, loginPage, login };

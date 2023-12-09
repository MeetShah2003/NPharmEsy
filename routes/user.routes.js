const { Router } = require("express");
const { signupPage, signUp, loginPage, login } = require("../controller/user.controller");

const userRoute = Router();

// signup page
userRoute.get("/signup",signupPage);

// signup form
userRoute.post("/signup",signUp);

// login page
userRoute.get("/login",loginPage);

// login form
userRoute.post("/login",login);

module.exports = { userRoute };

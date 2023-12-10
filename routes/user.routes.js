const { Router } = require("express");
const {
  signupPage,
  signUp,
  loginPage,
  login,
} = require("../controller/user.controller");
const passport = require("passport");
const userRoute = Router();

// signup page
userRoute.get("/signup", signupPage);

// signup form
userRoute.post("/signup", signUp);

// login page
userRoute.get("/login", loginPage);

// login form
userRoute.post("/login", login);

userRoute.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);
userRoute.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  function() {
    return res.redirect("/user/home");
  }
);

module.exports = { userRoute };

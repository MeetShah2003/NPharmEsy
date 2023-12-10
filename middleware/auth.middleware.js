const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = (req, res, next) => {
  let { token } = req.cookies;
  if (token) {
    let decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode.email == "meet@gmail.com") {
      next();
    } else {
      return res
        .status(400)
        .send({ message: "only authorized person can access these page" });
    }
  } else {
    return res.status(400).redirect("/user/login");
  }
};

module.exports = { isAuth };

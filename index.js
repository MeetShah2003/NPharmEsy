const express = require("express");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/user.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/user", userRoute);

app.listen(8090, () => {
  console.log("Server is running on port 8090");
  connection();
});

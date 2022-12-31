const express = require("express");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const mongoose = require("mongoose");
const cors = require("cors");
const router = express.Router();
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

try {
  mongoose.connect("mongodb://127.0.0.1:27017/freemesikho");
  console.log("connected mongo");
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.status(200).json({ success: true });
});
app.use("/api", require("./student/login"));
app.use("/api", require("./student/register"));
app.use("/api", require("./admin/checkadmin"));
app.use("/api", require("./student/uploadcover"));
app.use("/api", require("./student/studentdetails"));
app.use("/api", require("./student/email"));
app.use("/api", require("./admin/registeradmin"));
app.use("/api", require("./admin/adminlogin"));
app.use("/api", require("./admin/getcourses"));
app.use("/api", require("./admin/setcoursestatus"));
app.use("/api", require("./admin/getallstudents"));

app.use("/api", require("./college/dashboard"));

app.listen(port, (err) => {
  console.log("server started at ", port);
});

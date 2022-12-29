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
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);
try {
  mongoose.connect("mongodb://localhost:27017/freemesikho");
  console.log("connected mongo");
} catch (error) {
  console.log(error);
}

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

app.use("/api", require("./college/dashboard"));

app.listen(port, (err) => {
  console.log("server started at ", port);
});

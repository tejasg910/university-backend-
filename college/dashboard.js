const express = require("express");
const StudentInfo = require("../models/Studentinfo");
const router = express.Router();
const CollegeTeacher = require("../models/CollegeTeacher");
const dotenv = require("dotenv");

const jwt = require("jsonwebtoken");
router.get("/teacherdashboard", async (req, res) => {
  console.log("api hitted");
  //   console.log(req.query.token);
  const data = jwt.verify(req.query.token, process.env.JWT_SECRET_KEY);
  console.log(data);

  const user = await CollegeTeacher.findOne({ email: data.email });

  if (user) {
    const userData = await StudentInfo.find({});

    res.status(200).json({ success: true, data: userData });
  }
});

module.exports = router;

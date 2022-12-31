const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Studentinfo = require("../models/Studentinfo");
const CourseStatus = require("../models/CourseStatus");
// const EnrolledCourse = require("../models/EnrolledCourses");
const EnrolledCourses = require("../models/EnrolledCourses");

router.post("/getenrolledcourses", express.json(), async (req, res) => {
  const { email } = req.body;
  console.log("get enrolled courses ");
  const courses = await EnrolledCourses.find({ email });
  if (courses) {
    res.status(200).json({ success: true, courses });
  } else {
    res.status(500).json({ success: false, message: "No course found" });
  }
});

router.post("/updatecoursestatus", express.json(), async (req, res) => {
  // console.log(req.body);
  // const verify = jwt.verify(req.body.token, process.env.JWT_SECRET_KEY);
  // console.log(verify);

  // const userData = await Studentinfo.findOneAndUpdate({ email: verify.email }
  // console.log(userData.coursestatus);

  if (userData) {
  }

  res.status(200).json({ success: true, data: req.body });
});

router.post("/setcourse", express.json(), async (req, res) => {
  const { title, status, start, end, category, chapter, duration, email } =
    req.body;
  console.log(req.body);
  const data = new CourseStatus({
    title,
    status,
    start,
    end,
    category,
    duration,
    email,
    chapter,
  });
  const save = await data.save();

  if (save) {
    res.status(200).json({ success: true, data: save });
  }
});

router.post("/createnewcourse", express.json(), async (req, res) => {
  const { title, description, rating, email } = req.body;
  const course = new EnrolledCourses({
    title,
    description,
    email,
    rating,
  });

  const data = await course.save();
  if (data) {
    res.status(200).json({ success: true });
  }
});

module.exports = router;

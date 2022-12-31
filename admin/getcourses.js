const express = require("express");
const Studentinfo = require("../models/Studentinfo");
const router = express.Router();
const CourseStatus = require("../models/CourseStatus");

router.post("/getallcourses", express.json(), async (req, res) => {
  const email = req.query.email;
  console.log(email, "this is email");

  const data = await CourseStatus.find({ email: email });
  console.log(data);
  if (data) {
    res.status(200).json({ success: true, data: data });
  } else {
    res.status(400).json({ success: false, message: "Data not found" });
  }
});
module.exports = router;

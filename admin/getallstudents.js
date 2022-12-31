const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Studentinfo = require("../models/Studentinfo");
const CollegeTeacher = require("../models/CollegeTeacher");
router.get("/getallstudents", async (req, res) => {
  const admin = jwt.verify(req.query.token, process.env.JWT_SECRET_KEY);

  const user = await CollegeTeacher.findOne({ email: admin.email });

  if (user) {
    const data = await Studentinfo.find({});
    if (data) {
      res.status(200).json({ success: true, data: data });
    } else {
      res.status(500).json({ success: false, message: "data not found" });
    }
  } else {
    res.status(400).json({ success: false, message: "something went wrong" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const CollegeTeacher = require("../models/CollegeTeacher");

router.post("/checkteacher", express.json(), async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const data = await CollegeTeacher.findOne({ email });
  if (data) {
    res.status(200).json({ success: true, email: data.email });
  } else {
    res.status(200).json({ success: false, message: "you are not admin" });
  }
});

module.exports = router;

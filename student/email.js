const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const StudentInfo = require("../models/Studentinfo");
const jwt = require("jsonwebtoken");

router.post("/sendemail", express.json(), async (req, res) => {
  const { cookie } = req.body;

  const d = jwt.verify(cookie, process.env.JWT_SECRET_KEY);
  if (d.email) {
    console.log(d.email);
    res.status(200).json({ success: true, email: d.email });
  } else {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const StudentInfo = require("../models/Studentinfo");
const dotenv = require("dotenv");

const jwt = require("jsonwebtoken");

router.post("/studentinfo", express.json(), async (req, res) => {
  console.log(req.body.userDetails);
  const { firstName, lastName, pin, state, city, country, address, userEmail } =
    req.body.userDetails;
  console.log(userEmail);
  const { email } = req.body;
  const user = await Student.findOne({ email });
  console.log(user);
  if (user) {
    const update = await StudentInfo.findOneAndUpdate(
      { email: user.email },
      { firstName, lastName, pinCode: pin, state, city, country, address },
      { new: true }
    );
    console.log(update);
    res.status(200).json({ success: true, update });
  } else {
    console.log("you are here");
    res.status(400).json({ success: false, message: "This user is not found" });
  }
});

router.post("/getstudentinfo", express.json(), async (req, res) => {
  // const { cookie } = req.body;
  // const d = jwt.verify(cookie, process.env.JWT_SECRET_KEY);
  const { email } = req.body;

  const data = await StudentInfo.findOne({ email });

  res.status(200).json({ success: true, data });
});

module.exports = router;

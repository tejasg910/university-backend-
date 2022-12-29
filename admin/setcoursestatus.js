const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Studentinfo = require("../models/Studentinfo");

router.post("/updatecoursestatus", express.json(), async (req, res) => {
  console.log(req.body);
  const verify = jwt.verify(req.body.token, process.env.JWT_SECRET_KEY);
  console.log(verify);

  // const userData = await Studentinfo.findOneAndUpdate({ email: verify.email }
  // console.log(userData.coursestatus);

  if (userData) {
  }

  res.status(200).json({ success: true, data: req.body });
});

module.exports = router;

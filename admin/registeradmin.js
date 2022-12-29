const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const CollegeTeacher = require("../models/CollegeTeacher");
dotenv.config();
var CryptoJS = require("crypto-js");
router.post("/registeradmin", express.json(), async (req, res) => {
  const { email, name, password } = req.body;
  const user = await CollegeTeacher.findOne({ email });
  if (user) {
    return res
      .status(400)
      .json({ success: false, message: "This email is already taken!" });
  }
  var ciphertext = CryptoJS.AES.encrypt(
    password,
    process.env.CRYPTO_SECRET_KEY
  ).toString();

  const data = new CollegeTeacher({
    name,
    email,
    password: ciphertext,
  });
  const saved = await data.save();

  res.status(200).json({ success: true, email: data.email });
});

module.exports = router;

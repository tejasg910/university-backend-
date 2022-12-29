const express = require("express");
const router = express.Router();
const CollegeTeacher = require("../models/CollegeTeacher");

const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");

const jwt = require("jsonwebtoken");
dotenv.config();

router.post("/teacherlogin", express.json(), async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await CollegeTeacher.findOne({ email });
    if (data) {
      const bytes = CryptoJS.AES.decrypt(
        data.password,
        process.env.CRYPTO_SECRET_KEY
      );
      const originalText = bytes.toString(CryptoJS.enc.Utf8);

      if (originalText === password) {
        const token = jwt.sign({ email: email }, process.env.JWT_SECRET_KEY);

        res
          .status(200)
          .json({ success: true, message: "login successful", token });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Invalid credentials" });
      }
    } else {
      res.status(500).json({ success: false, message: "Email not found" });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
      error: error.message,
    });
  }
});
module.exports = router;

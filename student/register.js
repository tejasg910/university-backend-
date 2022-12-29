const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const dotenv = require("dotenv");
const StudentInfo = require("../models/Studentinfo");
dotenv.config();
var CryptoJS = require("crypto-js");

router.post("/register", express.json(), async (req, res) => {
  const getTime = () => {
    var currentTime = new Date();

    let originalDate = currentTime.toLocaleDateString().slice(0, 10);
    return originalDate;
  };
  const { name, email, password } = req.body;

  try {
    const user = await Student.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "This email is already taken!" });
    }
    var ciphertext = CryptoJS.AES.encrypt(
      password,
      process.env.CRYPTO_SECRET_KEY
    ).toString();

    const date = getTime();

    const data = new Student({
      name,
      email,
      password: ciphertext,
      joined: date,
    });
    const saved = await data.save();

    const update = new StudentInfo({
      firstName: "",
      lastName: "",
      country: "",
      address: "",
      city: "",
      pinCode: "",
      state: "",
      registerId: saved._id,
      email,
      joined: date,
    });
    await update.save();
    res
      .status(200)
      .json({ success: true, message: "Account created successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;

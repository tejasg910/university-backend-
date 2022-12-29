const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const dotenv = require("dotenv");
const multer = require("multer");
const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("testImage");
try {
  router.post("/uploadcover", async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
      } else {
        const newImage = new Student({
          name: "tejas",
          email: "tejas111@gmail.com",
          password: "admin",
          coverImage: {
            data: req.file.filename,
            contentType: "image/png",
          },
        });
        await newImage.save();
        res.json({ success: true });
      }
    });
  });
} catch (error) {
  console.log(error.message);
}

module.exports = router;

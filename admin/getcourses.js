const express = require("express");
const Studentinfo = require("../models/Studentinfo");
const router = express.Router();

router.post("/getallcourses", express.json(), async (req, res) => {
  const { key } = req.body;

  const data = await Studentinfo.findOne({ email: key });

  if (data.coursestatus) {
    res.status(200).json({ success: true, data: data.coursestatus });
  } else {
    res.status(400).json({ success: false, message: "Data not found" });
  }
});
module.exports = router;

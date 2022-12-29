const mongoose = require("mongoose");

const CollegeTeacher = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "teacher" },
});
mongoose.models = {};
module.exports = mongoose.model("CollegeTeacher", CollegeTeacher);

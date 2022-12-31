const mongoose = require("mongoose");

const CourseStatusSchema = mongoose.Schema({
  email: { type: String },
  title: { type: String },
  status: { type: String },
  start: { type: String },
  end: { type: String },
  category: { type: String },
  chapter: { type: String },
  duration: { type: String },
});
mongoose.models = {};
module.exports = mongoose.model("CourseStatus", CourseStatusSchema);

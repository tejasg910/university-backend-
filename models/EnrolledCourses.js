const mongoose = require("mongoose");

const EnrolledCoursesSchema = mongoose.Schema({
  email: { type: String },
  title: { type: String },
  description: { type: String },
  rating: { type: Number, default: 5 },
});

mongoose.models = {};
module.exports = mongoose.model("EnrolledCourse", EnrolledCoursesSchema);

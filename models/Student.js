const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  coverImage: { data: Buffer, contentType: String },
  joined: { type: String },
});
mongoose.models = {};
module.exports = mongoose.model("Student", StudentSchema);

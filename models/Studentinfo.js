const mongoose = require("mongoose");

const StudentInfoSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  country: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  pinCode: { type: String },
  registerId: { type: String },
  pastEducation: { type: Array },
  birthdate: { type: String },
  mobile: { type: String },
  email: { type: String, required: true },
  joined: { type: String },
  biotitle: { type: String },
  bioinfo: { type: String },
  active: { type: Boolean },
  gender: { type: String },
  coursestatus: { type: Array },
  special_achievements: { type: Array },
});
mongoose.models = {};
module.exports = mongoose.model("Studentinfo", StudentInfoSchema);

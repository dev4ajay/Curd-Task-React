// models/user.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: Date,
  salary: Number,
  joiningDate: Date,
  relievingDate: Date,
  contact: String,
  status: { type: String, enum: ["active", "inactive"] },
});

module.exports = mongoose.model("User", userSchema);

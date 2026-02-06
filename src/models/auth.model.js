const mongoose = require("mongoose");
 
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["ADMIN", "DOCTOR", "PATIENT"],
    default: "PATIENT"
  }
});
 
module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");
 
const patientSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true
    },
    bloodGroup: {
      type: String
    },
    address: {
      type: String
    },
    emergencyContact: {
      type: String
    },
    medicalHistory: {
      type: String
    }
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Patient", patientSchema);
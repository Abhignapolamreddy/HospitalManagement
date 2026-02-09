const mongoose = require("mongoose");
 
const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    //required: true,
    },
 
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
 
    appointmentDate: {
      type: Date,
      required: true,
    },
    appointmentTime: {
      type: String,
      required: true,
    },
 
    healthProblem: {
      type: String,
      required: true,
    },
 
    status: {
      type: String,
      enum: ["PENDING", "CONFIRMED","COMPLETED", "CANCELLED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Appointment", appointmentSchema);
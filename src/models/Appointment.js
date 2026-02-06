const mongoose = require("mongoose");
 
const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
 
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
 
    appointmentDate: {
      type: Date,
      required: true,
    },
 
    healthProblem: {
      type: String,
      required: true,
    },
 
    status: {
      type: String,
      enum: ["BOOKED", "COMPLETED", "CANCELLED"],
      default: "BOOKED",
    },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Appointment", appointmentSchema);
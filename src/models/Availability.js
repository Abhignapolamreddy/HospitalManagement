const mongoose = require("mongoose");
 
const availabilitySchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
 
    day: {
      type: String,
      enum: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      required: true,
    },
 
    startTime: {
      type: String, // "10:00"
      required: true,
    },
 
    endTime: {
      type: String, // "13:00"
      required: true,
    },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Availability", availabilitySchema);
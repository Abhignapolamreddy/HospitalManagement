const mongoose = require("mongoose");
 
const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
 
    specialist: {
      type: String,
      required: true,
    },
 
    experience: {
      type: Number,
      default: 0,
    },
 
    availability: [
      {
        day: String,        // MONDAY, TUESDAY
        startTime: String,  // "10:00"
        endTime: String,    // "13:00"
      },
    ],
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Doctor", doctorSchema);
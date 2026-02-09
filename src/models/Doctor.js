const mongoose = require("mongoose");
 
const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
 
    specializationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Specialization",
      required: true
    },
 
    experience: {
      type: Number,
      default: 0,
    },
 
    
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Doctor", doctorSchema);
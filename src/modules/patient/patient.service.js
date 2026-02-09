const Patient = require("../../models/Patient");
 
/**
* Create patient profile
*/
exports.createProfile = async (data) => {
  // prevent duplicate profile for same user
  const exists = await Patient.findOne({ userId: data.userId });
  if (exists) throw new Error("Patient profile already exists");
 
  return await Patient.create(data);
};
 
/**
* Get my profile
*/
exports.getMyProfile = async (userId) => {
  const patient = await Patient.findOne({ userId });
 
  if (!patient) throw new Error("Patient profile not found");
 
  return patient;
};
 
/**
* Update my profile
*/
exports.updateMyProfile = async (userId, data) => {
  const updated = await Patient.findOneAndUpdate(
    { userId },
    data,
    { new: true }
  );
 
  if (!updated) throw new Error("Patient profile not found");
 
  return updated;
};

const Doctor = require("../../models/Doctor");
const Availability = require("../../models/Availability");
 
exports.getDoctorsBySpecialization = async (specializationId) => {
  const doctors = await Doctor.find({ specializationId })
    .populate("userId", "name email")
    .lean();
 
  // attach availability manually
  for (let doc of doctors) {
    const availability = await Availability.find({ doctorId: doc._id });
    doc.availability = availability;
  }
 
  return doctors;
};
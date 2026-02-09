const Doctor = require("../../models/Doctor");
const User = require("../../models/Auth");
const Appointment = require("../../models/Appointment");
const Availability = require("../../models/Availability");
 
/**
* ADMIN → Create doctor profile (USER already exists with role DOCTOR)
*/
exports.createDoctorProfile = async (data) => {
  // check user exists & role is DOCTOR
  const user = await User.findById(data.userId);
 
  if (!user || user.role !== "DOCTOR") {
    throw new Error("Invalid doctor user");
  }
 
  // prevent duplicate profile
  const exists = await Doctor.findOne({ userId: data.userId });
  if (exists) throw new Error("Doctor profile already exists");
 
  // create doctor profile
  const doctor = await Doctor.create({
    userId: data.userId,
    specialist: data.specialist,
    experience: data.experience || 0,
  });
 
  return doctor;
};
 
/**
* DOCTOR → View own profile
*/
exports.getMyProfile = async (userId) => {
  const doctor = await Doctor.findOne({ userId })
    .populate("userId", "name email role");
 
  if (!doctor) throw new Error("Doctor profile not found");
 
  return doctor;
};
 
/**
* DOCTOR → View own appointments
*/
exports.getMyAppointments = async (userId) => {
  return await Appointment.find({ doctorId: userId })
    .populate("patientId", "name email")
    .sort({ appointmentDate: 1 });
};
 
/**
* DOCTOR → Update appointment status
*/
exports.updateAppointmentStatus = async (appointmentId, status) => {
  const appointment = await Appointment.findByIdAndUpdate(
    appointmentId,
    { status },
    { new: true }
  );
 
  if (!appointment) throw new Error("Appointment not found");
 
  return appointment;
};
 
/**
* DOCTOR → Update availability
*/
/**exports.updateAvailability = async (userId, availability) => {
  const doctor = await Doctor.findOneAndUpdate(
    { userId },
    { availability },
    { new: true }
  );
 
  if (!doctor) throw new Error("Doctor not found");
 
  return doctor;
};*/

 
/** DOCTOR → Add availability */
exports.addAvailability = async (userId, data) => {
  const doctor = await Doctor.findOne({ userId });
  if (!doctor) throw new Error("Doctor profile not found");
 
  return await Availability.create({
    doctorId: doctor._id,
    day: data.day,
    startTime: data.startTime,
    endTime: data.endTime,
  });
};
 
/** DOCTOR → Get my availability */
exports.getMyAvailability = async (userId) => {
  const doctor = await Doctor.findOne({ userId });
  if (!doctor) throw new Error("Doctor profile not found");
 
  return await Availability.find({ doctorId: doctor._id }).sort({ day: 1 });
};
 
/** DOCTOR → Delete availability */
exports.deleteAvailability = async (userId, availabilityId) => {
  const doctor = await Doctor.findOne({ userId });
  if (!doctor) throw new Error("Doctor profile not found");
 
  return await Availability.findOneAndDelete({
    _id: availabilityId,
    doctorId: doctor._id,
  });
};
 
/** PATIENT → View doctor availability */
exports.getDoctorAvailability = async (doctorId) => {
  return await Availability.find({ doctorId }).sort({ day: 1 });
};


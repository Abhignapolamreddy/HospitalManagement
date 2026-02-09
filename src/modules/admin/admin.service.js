
const authService = require("../auth/auth.service");
const Doctor = require("../../models/Doctor");
const Patient = require("../../models/Patient");
const Appointment = require("../../models/Appointment");
 
/**
 * ADMIN → Register Doctor
 * Reuses auth register (no duplicate logic)
 */
exports.registerDoctor = async (data) => {
  // 1️⃣ create USER via auth service
  const user = await authService.registerUser({
    name:data.name,
    email:data.email,
    password:data.password,
    role: "DOCTOR",
  });
 
  // 2️⃣ create DOCTOR profile (extra doctor-specific fields only)
  const doctor = await Doctor.create({
    userId: user._id,
    specializationId: data.specializationId,
    experience: data.experience,
  });
 
  return { user, doctor };
};
 
/**
 * ADMIN → Get all doctors
 */
exports.getAllDoctors = async () => {
  return await Doctor.find()
    .populate("userId", "name email")
    .populate("specializationId", "name");
};
 
/**
 * ADMIN → Get all patients
 */
exports.getAllPatients = async () => {
  return await Patient.find().populate("userId", "name email");
};
 
/**
 * ADMIN → Get all appointments
 */
exports.getAllAppointments = async () => {
  return await Appointment.find()
    .populate("doctorId", "name email")
    .populate("patientId", "name email")
    .sort({ appointmentTime: -1 });
};
 
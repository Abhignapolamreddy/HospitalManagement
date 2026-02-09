const Appointment = require("../../models/Appointment");
const User = require("../../models/Auth");
const Doctor=require("../../models/Doctor")
 
/**
 * PATIENT → Book appointment
 */
exports.bookAppointment = async (data,patientId) => {
  // 1check doctor exists
  const doctor = await Doctor.findById(data.doctorId);
  if (!doctor) throw new Error("Doctor not found");
 
  // 2️ prevent double booking (same doctor, same date, same time)
  const exists = await Appointment.findOne({
  
    doctorId: data.doctorId,
    appointmentDate: data.appointmentDate,
    appointmentTime: data.appointmentTime,
    status: "CONFIRMED",
  });
 
  if (exists) throw new Error("Time slot already booked");
 
  // 3️create appointment
  return await Appointment.create({...data,patientId});
};
 
/**
 * PATIENT → View my appointments
 */
exports.getMyAppointments = async (patientId) => {
  return await Appointment.find({ patientId })
    .populate("doctorId", "name email")
    .sort({ appointmentDate: 1 });
};
 
/**
 * DOCTOR → View own appointments
 */
exports.getDoctorAppointments = async (userId) => {
  const doctor=await Doctor.findOne({userId: userId})
  console.log(userId)
  console.log(doctor)
  if(!doctor)throw new Error("Doctor Profile not found")
  return await Appointment.find({ doctorId: doctor._id })
    .populate("patientId", "name email")
    .sort({ appointmentDate: 1 });
};
 
/**
 * DOCTOR → Update appointment status
 */
exports.updateStatus = async (appointmentId, status) => {
  const appointment = await Appointment.findByIdAndUpdate(
    appointmentId,
    { status },
    { new: true }
  );
 
  if (!appointment) throw new Error("Appointment not found");
 
  return appointment;
};
 
/**
 * PATIENT → Cancel appointment
 */
exports.cancelAppointment = async (appointmentId, patientId) => {
  const appointment = await Appointment.findOneAndUpdate(
    { _id: appointmentId, patientId },
    { status: "CANCELLED" },
    { new: true }
  );
 
  if (!appointment) throw new Error("Appointment not found");
 
  return appointment;
};
 
const service = require("./appointment.service");
 
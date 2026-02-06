const Appointment = require("../../models/Appointment");
const User = require("../../models/User");
 
/**
 * PATIENT → Book appointment
 */
exports.bookAppointment = async (data) => {
  // check doctor exists
  const doctor = await User.findById(data.doctorId);
  if (!doctor || doctor.role !== "DOCTOR") {
    throw new Error("Invalid doctor");
  }
 
  // prevent double booking (same doctor, same time)
  const exists = await Appointment.findOne({
    doctorId: data.doctorId,
    appointmentDate: data.appointmentDate,
    status: "BOOKED",
  });
 
  if (exists) throw new Error("Slot already booked");
 
  return await Appointment.create(data);
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
exports.getDoctorAppointments = async (doctorId) => {
  return await Appointment.find({ doctorId })
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
 
/**
 * PATIENT → Book
 */
exports.book = async (req, res) => {
  try {
    const result = await service.bookAppointment({
      ...req.body,
      patientId: req.user.id,
    });
 
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
 
/**
 * PATIENT → My appointments
 */
exports.myAppointments = async (req, res) => {
  try {
    const result = await service.getMyAppointments(req.user.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 
/**
 * DOCTOR → View appointments
 */
exports.doctorAppointments = async (req, res) => {
  try {
    const result = await service.getDoctorAppointments(req.user.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 
/**
 * DOCTOR → Update status
 */
exports.updateStatus = async (req, res) => {
  try {
    const result = await service.updateStatus(
      req.params.id,
      req.body.status
    );
 
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
 
/**
 * PATIENT → Cancel
 */
exports.cancel = async (req, res) => {
  try {
    const result = await service.cancelAppointment(
      req.params.id,
      req.user.id
    );
 
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
 
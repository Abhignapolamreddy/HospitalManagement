const service = require("./admin.service");
 
/**
 * Register doctor
 */
exports.registerDoctor = async (req, res) => {
  try {
    const doctor = await service.registerDoctor(req.body);
 
    res.status(201).json({
      message: "Doctor registered successfully",
      data: doctor,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
 
/**
 * Get doctors
 */
exports.getDoctors = async (req, res) => {
  const doctors = await service.getAllDoctors();
  res.json(doctors);
};
 
/**
 * Get patients
 */
exports.getPatients = async (req, res) => {
  const patients = await service.getAllPatients();
  res.json(patients);
};
 
/**
 * Get appointments
 */
exports.getAppointments = async (req, res) => {
  const appointments = await service.getAllAppointments();
  res.json(appointments);
};
 
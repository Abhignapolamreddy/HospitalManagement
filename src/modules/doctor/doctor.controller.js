const doctorService = require("./doctor.service");
 
/**
* ADMIN → Create doctor profile
*/
exports.createProfile = async (req, res) => {
  try {
    const result = await doctorService.createDoctorProfile(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
 
/**
* DOCTOR → View own profile
*/
exports.myProfile = async (req, res) => {
  try {
    const result = await doctorService.getMyProfile(req.user.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
 
/**
* DOCTOR → View own appointments
*/
exports.myAppointments = async (req, res) => {
  try {
    const result = await doctorService.getMyAppointments(req.user.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 
/**
* DOCTOR → Update appointment status
*/
exports.updateStatus = async (req, res) => {
  try {
    const result = await doctorService.updateAppointmentStatus(
      req.params.id,
      req.body.status
    );
 
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
 
/**
* DOCTOR → Update availability
*/
exports.updateAvailability = async (req, res) => {
  try {
    const result = await doctorService.updateAvailability(
      req.user.id,
      req.body.availability
    );
 
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

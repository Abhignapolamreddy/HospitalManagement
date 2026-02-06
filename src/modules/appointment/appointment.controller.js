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
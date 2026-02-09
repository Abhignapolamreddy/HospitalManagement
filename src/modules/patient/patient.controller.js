const service = require("./patient.service");
 
/**
 * Create profile
 */
exports.createProfile = async (req, res) => {
  try {
    const result = await service.createProfile({
      ...req.body,
      userId: req.user.id, // from JWT
    });
 
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
 
/**
 * Get my profile
 */
exports.myProfile = async (req, res) => {
  try {
    const result = await service.getMyProfile(req.user.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
 
/**
 * Update my profile
 */
exports.updateProfile = async (req, res) => {
  try {
    const result = await service.updateMyProfile(
      req.user.id,
      req.body
    );
 
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
 
//const service = require("./patient.service");
 
exports.getDoctorsBySpecialization = async (req, res) => {
  try {
    const { specializationId } = req.params;
 
    const doctors = await service.getDoctorsBySpecialization(specializationId);
 
    res.json({
      message: "Doctors fetched successfully",
      data: doctors,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const service = require("./specialization.service");
 
/**
* Create specialization (ADMIN)
*/
exports.create = async (req, res) => {
  try {
    const result = await service.createSpecialization(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
 
/**
* Get all specializations (PATIENT/DOCTOR/ADMIN)
*/
exports.getAll = async (req, res) => {
  const result = await service.getAllSpecializations();
  res.json(result);
};
 
/**
* Delete specialization (ADMIN)
*/
exports.remove = async (req, res) => {
  try {
    const result = await service.deleteSpecialization(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
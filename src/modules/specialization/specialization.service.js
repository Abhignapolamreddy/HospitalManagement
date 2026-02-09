const Specialization = require("../../models/Specialization");
 
/**
* ADMIN → Create specialization
*/
exports.createSpecialization = async (data) => {
  const exists = await Specialization.findOne({ name: data.name });
  if (exists) throw new Error("Specialization already exists");
 
  return await Specialization.create(data);
};
 
/**
* PUBLIC → Get all specializations
*/
exports.getAllSpecializations = async () => {
  return await Specialization.find().sort({ name: 1 });
};
 
/**
* ADMIN → Delete specialization
*/
exports.deleteSpecialization = async (id) => {
  const spec = await Specialization.findByIdAndDelete(id);
  if (!spec) throw new Error("Specialization not found");
 
  return { message: "Specialization deleted" };
};
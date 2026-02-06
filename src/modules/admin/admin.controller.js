// controllers/adminController.js
 
const adminService = require('../services/adminService');
 
// Login
exports.login = (req, res) => {
    const { email, password } = req.body;
    const admin = adminService.loginAdmin(email, password);
 
    if (!admin) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
 
    res.json({ message: "Admin logged in", admin });
};
 
// Create specialization
exports.createSpecialization = (req, res) => {
    const spec = adminService.createSpecialization(req.body);
    res.status(201).json(spec);
};
 
// Get all specializations
exports.getSpecializations = (req, res) => {
    const specs = adminService.getAllSpecializations();
    res.json(specs);
};
 
// Register doctor
exports.createDoctor = (req, res) => {
    const doctor = adminService.createDoctor(req.body);
    res.status(201).json(doctor);
};
 
// Get doctors
exports.getDoctors = (req, res) => {
    const doctors = adminService.getAllDoctors();
    res.json(doctors);
};
 
// Get patients
exports.getPatients = (req, res) => {
    const patients = adminService.getAllPatients();
    res.json(patients);
};
 
// Get appointments
exports.getAppointments = (req, res) => {
    const appointments = adminService.getAllAppointments();
    res.json(appointments);
};
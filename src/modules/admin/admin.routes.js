// routes/adminRoutes.js
 
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
 
// Admin login
router.post('/login', adminController.login);
 
// Specializations
router.post('/specializations', adminController.createSpecialization);
router.get('/specializations', adminController.getSpecializations);
 
// Doctors
router.post('/doctors', adminController.createDoctor);
router.get('/doctors', adminController.getDoctors);
 
// Patients
router.get('/patients', adminController.getPatients);
 
// Appointments
router.get('/appointments', adminController.getAppointments);
 
module.exports = router;
 
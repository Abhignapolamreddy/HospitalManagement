const express = require("express");
const router = express.Router();
const controller = require("./doctor.controller");
const auth = require("../auth/auth.middleware");
 
// ADMIN → create doctor profile
router.post("/", auth(["ADMIN"]), controller.createProfile);
 
// DOCTOR → own features
router.get("/me", auth(["DOCTOR"]), controller.myProfile);
router.get("/appointments", auth(["DOCTOR"]), controller.myAppointments);
router.put("/appointments/:id/status", auth(["DOCTOR"]), controller.updateStatus);
router.put("/availability", auth(["DOCTOR"]), controller.updateAvailability);
 
module.exports = router;
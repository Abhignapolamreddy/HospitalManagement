const express = require("express");
const router = express.Router();
const controller = require("./appointment.controller");
const auth = require("../auth/auth.middleware");
 
// PATIENT
router.post("/", auth(["PATIENT"]), controller.book);
router.get("/me", auth(["PATIENT"]), controller.myAppointments);
router.put("/:id/cancel", auth(["PATIENT"]), controller.cancel);
 
// DOCTOR
router.get("/doctor", auth(["DOCTOR"]), controller.doctorAppointments);
router.put("/:id/status", auth(["DOCTOR"]), controller.updateStatus);
 
module.exports = router;
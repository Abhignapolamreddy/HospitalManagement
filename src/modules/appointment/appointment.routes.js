const express = require("express");
const router = express.Router();
const controller = require("./appointment.controller");
const auth = require("../../middleware/authMiddleware");
const role = require("../../middleware/roleMiddleware");
 
// PATIENT
router.post("/", auth,role(["PATIENT"]), controller.book);
router.get("/me", auth,role(["PATIENT"]), controller.myAppointments);
router.put("/:id/cancel", auth,role(["PATIENT"]), controller.cancel);
 
// DOCTOR
router.get("/doctor", auth,role(["DOCTOR"]), controller.doctorAppointments);
router.put("/:id/status", auth,role(["DOCTOR"]), controller.updateStatus);
 
module.exports = router;
const express = require("express");
const router = express.Router();
const controller = require("./doctor.controller");
const auth = require("../../middleware/authMiddleware");
const role = require("../../middleware/roleMiddleware");
 
// ADMIN → create doctor profile
router.post("/", auth,role(["ADMIN"]), controller.createProfile);
 
// DOCTOR → own features
router.get("/me", auth,role(["DOCTOR"]), controller.myProfile);
router.get("/appointments", auth,role(["DOCTOR"]), controller.myAppointments);
router.put("/appointments/:id/status", auth,role(["DOCTOR"]), controller.updateStatus);
//router.put("/availability", auth,role(["DOCTOR"]), controller.updateAvailability);
 
/** DOCTOR protected routes */
router.use(auth, role(["DOCTOR"]));
 
router.post("/availability", controller.addAvailability);
router.get("/availability", controller.getMyAvailability);
router.delete("/availability/:id", controller.deleteAvailability);
 
/** PATIENT view doctor availability (public after auth) */
router.get(
  "/:doctorId/availability",
  auth,
  controller.getDoctorAvailability
);
 
module.exports = router;
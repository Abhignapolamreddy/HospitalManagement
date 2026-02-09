const express = require("express");
const router = express.Router();
 
const controller = require("./patient.controller");
const auth = require("../../middleware/authMiddleware");
const role = require("../../middleware/roleMiddleware");
 
/**
* PATIENT profile routes
*/
router.post("/profile", auth, role(["PATIENT"]), controller.createProfile);
router.get("/me", auth, role(["PATIENT"]), controller.myProfile);
router.put("/update", auth, role(["PATIENT"]), controller.updateProfile);
router.get("/doctors/:specializationId",auth,role(["PATIENT"]),controller.getDoctorsBySpecialization);
 
module.exports = router;
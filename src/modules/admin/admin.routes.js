const express = require("express");
const router = express.Router();
 
const controller = require("./admin.controller");
const auth = require("../../middleware/authMiddleware");
const role = require("../../middleware/roleMiddleware");
 
/**
* All routes → ADMIN only
*/
router.use(auth, role(["ADMIN"]));
 
router.post("/doctor", controller.registerDoctor);
router.get("/doctors", controller.getDoctors);
router.get("/patients", controller.getPatients);
router.get("/appointments", controller.getAppointments);
 
module.exports = router;
 
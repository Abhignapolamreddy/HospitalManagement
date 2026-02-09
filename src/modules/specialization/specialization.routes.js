const express = require("express");
const router = express.Router();
 
const controller = require("./specialization.controller");
const auth = require("../../middleware/authMiddleware");
const role = require("../../middleware/roleMiddleware");
 
/**
* PUBLIC → view specializations
*/
router.get("/", auth, controller.getAll);
 
/**
* ADMIN → manage specializations
*/
router.post("/", auth, role(["ADMIN"]), controller.create);
router.delete("/:id", auth, role(["ADMIN"]), controller.remove);
 
module.exports = router;
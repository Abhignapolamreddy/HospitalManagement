const express=require("express");
const userhandle = require("./patient.controller");

const userRouter=express.Router();

userRouter.post("/patient",userhandle)

module.exports=userRouter

const express=require('express');
const userRouter = require('./modules/patient/patient.routes');

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
const authRoutes = require("./modules/auth/auth.routes");
const doctorRoutes = require("./modules/doctor/doctor.routes");
const appointmentRoutes = require("./modules/appointment/appointment.routes");


//console.log(process.env.JWT_SECRET)
 
app.use("/api/auth", authRoutes);
 



app.use("/admin",adminRoutes)


 
app.use("/doctors", doctorRoutes);

c
 
app.use("/appointments", appointmentRoutes);


app.get('/',(req,res)=>{
    res.send('Our Hospital API running');
})

module.exports=app;
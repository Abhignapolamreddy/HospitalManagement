const express=require('express');
const userRouter = require('./modules/patient/patient.routes');

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
const authRoutes = require("./modules/auth/auth.routes");

//console.log(process.env.JWT_SECRET)
 
app.use("/api/auth", authRoutes);
 
app.get('/',(req,res)=>{
    res.send('Our Hospital API running');
})

module.exports=app;
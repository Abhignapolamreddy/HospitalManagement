<<<<<<< Updated upstream
const express=require('express');
const userRouter = require('./modules/patient/patient.routes');

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
const authRoutes = require("./modules/auth/auth.routes");

//console.log(process.env.JWT_SECRET)
 
app.use("/api/auth", authRoutes);
 
=======
const express=require('express')
const adminRoutes = require("./modules/admin/admin.routes")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/admin",adminRoutes)

>>>>>>> Stashed changes
app.get('/',(req,res)=>{
    res.send('Our Hospital API running');
})

module.exports=app;
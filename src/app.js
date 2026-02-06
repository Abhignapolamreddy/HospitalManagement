const express=require('express');
const userRouter = require('./modules/patient/patient.routes');

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/hos",userRouter)
app.get('/',(req,res)=>{
    res.send('Our Hospital API running');
})
module.exports=app;
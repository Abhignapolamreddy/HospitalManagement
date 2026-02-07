const express=require('express')

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
console.log(process.env.JWT_SECRET)
app.get('/',(req,res)=>{
    res.send('Our Hospital API running');
})
module.exports=app;
const registerDoctor=require("./doctor.service")

const registerDoctor=require('Doctor')
const register=async(req,res)=>{
    const result=await registerDoctor(req.body);

}


const Doctor=require('./models/Doctor.js');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


const registerDoctor=async(data)=>{
    const{
        name,
        email,
        password,
        phone,
        user_id,
        specialization_id,
        availability_schedule
    }=data;

    
     if (!name || !email || !password || !user_id || !specialization_id || !availability_schedule) {
         return { status: 400, payload: { success: false, message: "All required fields must be filled" } };
     }

     
 // duplicate email
        const existsEmail = await Doctor.findOne({ email: email.toLowerCase() });
            if (existsEmail) {
               return { status: 409, payload: { success: false, message: "Email already exists" } };
           }

           
      if (phone) {
          const existsPhone = await Doctor.findOne({ phone });
       if (existsPhone) {
           return { status: 409, payload: { success: false, message: "Phone already exists" } };
       }
  }
  const existUser=await Doctor.findOne({user_id});
    if(existUser){
        return {status:409, payload:{success:false, message:"user_id already taken"}}
    }
    
    const salt= await bcrypt.genSalt(10)

}







module.exports={registerDoctor};


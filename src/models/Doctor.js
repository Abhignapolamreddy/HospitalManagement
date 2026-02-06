const mongoose=require('mongoose');

const DoctorSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        unique:true,
        require:true
    },
    phone:{
        type:String,
        unique:true
    },
    user_id:{
        type:Number,
        ref:"User",
        require:true,
        unique:true
    },
    
    specialization_id: {
      type: Schema.Types.ObjectId,
      ref: "Specialization",
      required: true,
    },
    
   availability_schedule:{
    type:String,
    require:true
   }

})

module.exports = mongoose.model("Doctor", DoctorSchema)
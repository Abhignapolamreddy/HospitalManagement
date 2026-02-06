const mongoose=require("mongoose");

let schema=new mongoose.Schema({
    age:{type:String,required:true},
    disease:{type:String,required:true},
    location:{type:String,required:true}
})

let Patientmodel = mongoose.model("user",schema);

module.exports=Patientmodel
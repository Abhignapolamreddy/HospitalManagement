const Patientmodel = require("../../models/Patient");

const userhandle=()=>{
    let {age,disease,location}=req.body;

    if(!age || ! disease || !location){
        res.status(400).body({
            message:"provide All the input fields"
        })
    }

    let store=Patientmodel.insertOne(req.body)

}

module.exports=userhandle
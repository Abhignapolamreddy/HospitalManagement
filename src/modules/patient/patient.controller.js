const Patientmodel = require("../../models/Patient");

const userhandle = (req, res) => {
    let { userId, age, gender, bloodGroup, address, emergencyContact , medicalHistory } = req.body;

    if (!userId || !age || !gender || !bloodGroup || !address || !emergencyContact || !medicalHistory) {
        res.status(400).json({
            message: "provide All the input fields"
        })
    }

    
        try {
            let result =Patientmodel.insertOne(req.body)
            res.status(200).json({
                message: "Patient added",
                data: req.body

            })
        } catch (error) {
            return res.status(500).json({
                message:"serverside Error"
            })
        }
    
};

module.exports = userhandle




 
let users = [
    {
        id: "1",
        name: "System Admin",
        email: "admin@hospital.com",
        password: "admin123",
        role: "admin"
    }
];
 
let specializations = [];
let doctors = [];
let patients = [];
let appointments = [];
 
// Admin login
const loginAdmin = (email, password) => {
    const admin = users.find(
        user => user.email === email && user.password === password && user.role === "admin"
    );
    return admin || null;
};
 

// Doctor
const createDoctor = (data) => {
    const user = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        password: data.password,
        role: "doctor"
    };
    users.push(user);
 
    const doctor = {
        id: user.id,
        user_id: user.id,
        specialization_id: data.specialization_id,
        experience_years: data.experience_years,
        consultation_fee: data.consultation_fee
    };
    doctors.push(doctor);
 
    return doctor;
};
 
const getAllDoctors = () => doctors;

// specialization


// Patients
const getAllPatients = () => patients;
 
// Appointments
const getAllAppointments = () => appointments;

 
module.exports = {
    loginAdmin,
    createSpecialization,
    getAllSpecializations,
    createDoctor,
    getAllDoctors,
    getAllPatients,
    getAllAppointments
};
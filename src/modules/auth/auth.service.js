const User = require("../../models/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
 
exports.registerUser = async (data) => {
  console.log("JWT SECRET", process.env.JWT_SECRET)
  const userExists = await User.findOne({ email: data.email });
  if (userExists) throw new Error("User already exists");
 
  const hashedPassword = await bcrypt.hash(data.password, 10);
 
  return await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    role: data.role
  });
};
 
exports.loginUser = async (data) => {
  //console.log("JWT SECRET", process.env.JWT_SECRET)
 // const secret="abhi"
  const user = await User.findOne({ email: data.email });
  if (!user) throw new Error("Invalid email");
 
  const match = await bcrypt.compare(data.password, user.password);
  if (!match) throw new Error("Invalid password");
 
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
 
  return { user, token };
};
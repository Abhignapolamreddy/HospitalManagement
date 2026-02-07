const authService = require("./auth.service");
 
exports.register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({ message: "Registered Successfully", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
 
exports.login = async (req, res) => {
  try {
    const result = await authService.loginUser(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
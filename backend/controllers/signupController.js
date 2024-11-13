const Users = require("../models/Users");


exports.signupUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    console.log(username,email,password);
    const newUser = await Users.create({
      username: username,
      email: email,
      password: password,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: "Error in Signing up user.",
      error: error,
    });
  }
};

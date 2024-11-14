const Users = require("../models/Users");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const getUser = await Users.findAll({
      where: {
        email: email,
      },
    });

    if (getUser.length == 1) {
      if (getUser[0].dataValues.password == password) {
        res.status(200).json(getUser);
      } else {
        res.status(401).json({
          message: "Password doesn't match",
        });
      }
    } else {
      res.status(404).json({
        message: "User doesn't exist",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

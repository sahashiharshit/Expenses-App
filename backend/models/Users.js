const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Users = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: { 
    type: Sequelize.STRING,
    allowNull:false,
    unique:true,
    
},
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Users;

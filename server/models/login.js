const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Login = sequelize.define("Login", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

module.exports = Login;

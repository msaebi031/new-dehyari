const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Alert = sequelize.define("Alert", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  power: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  p: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "تست",
  },
});

module.exports = Alert;

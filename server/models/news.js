const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const News = sequelize.define("News", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  p: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dateCreate: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

module.exports = News;

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cricketer = sequelize.define("Cricketer", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  photoUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  birthPlace: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  career: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  numberOfMatches: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalRuns: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fifties: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  centuries: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  wickets: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  average: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Cricketer;

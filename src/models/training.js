const { DataTypes, Model } = require("sequelize");
const sequelize = require("../data/connect");

class Training extends Model {}

Training.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "training",
});

module.exports = Training;

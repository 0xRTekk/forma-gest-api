const { DataTypes, Model } = require("sequelize");
const sequelize = require("../data/connect");

class Organization extends Model {}

Organization.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "0000000000"
  }
}, {
  sequelize,
  tableName: "organization",
});

module.exports = Organization;

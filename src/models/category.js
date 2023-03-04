const { DataTypes, Model } = require("sequelize");
const sequelize = require("../data/connect");

class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, // The connection to postgres
  tableName: "category", // By default, Sequelize will name the table : Categories
});

module.exports = Category;

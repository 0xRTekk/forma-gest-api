require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    timestamps: true, // Adds createdAt and updatedAt timestamps to the model. Default true.
    underscored: true,
    // createdAt: "created_at", // Override the name of the createdAt column if a string is provided, or disable it if false.
    // updatedAt: "updated_at", // Override the name of the updatedAt column if a string is provided, or disable it if false.
  },
  // logging: false, // Pour empêcher de logger les requêtes SQL faites à la BDD en console Node
  // query: { raw: true } // Permet de renvoyer les données brutes de la BDD sans les wrapper dans les models sequelize qui sont difficile à lire en console.
});

module.exports = sequelize;

// Fichier pour créer les tables à partir des modèles Sequelize et faire du seeding
const sequelize = require("./connect");
const { Category, Organization, Session, Training, User } = require("../models");

const seeding = {
  run: async function() {
    try {
      await sequelize.sync({ force: true });
    } catch (error) {
      console.trace("Error during seeding : " + error);
    }
  }
};

seeding.run();

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../data/connect");

class Session extends Model {}

Session.init({
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: "start_sate"
  },
  endDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: "end_sate"
  },
  maxStudents: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field: "max_students"
  },
  nbStudents : {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field: "nb_students"
  },
  state: {
    type: DataTypes.ENUM,
    values: ["Not started", "Started", "Ended"],
    allowNull: false,
    defaultValue: "Not started"
  }
}, {
  sequelize,
  tableName: "session",
});

module.exports = Session;

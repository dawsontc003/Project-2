module.exports = (sequelize, DataTypes) => {
  const animaldb = sequelize.define("animal_score", {
    name: DataTypes.STRING,
    q_1: DataTypes.INTEGER,
    q_2: DataTypes.INTEGER,
    q_3: DataTypes.INTEGER,
  });
  return animaldb;
};

module.exports = (sequelize, DataTypes) => {
  const animaldb = sequelize.define("animal_score", {
    name: DataTypes.STRING,
    q_1: DataTypes.STRING,
    q_2: DataTypes.STRING,
    q_3: DataTypes.STRING,
  });
  return animaldb;
};

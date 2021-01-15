module.exports = (sequelize, DataTypes) => {
  const Animaldb = sequelize.define("Animaldb", {
    name: DataTypes.STRING,
    q_1: DataTypes.INTEGER,
    q_2: DataTypes.INTEGER,
    q_3: DataTypes.INTEGER,
  });
  return Animaldb;
};

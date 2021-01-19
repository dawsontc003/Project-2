module.exports = (sequelize, DataTypes) => {
  const Animaldb = sequelize.define("Animaldb", {
    name: DataTypes.STRING,
    a_1: DataTypes.INTEGER,
    a_2: DataTypes.INTEGER,
    a_3: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    q_1: DataTypes.STRING,
    q_2: DataTypes.STRING,
    q_3: DataTypes.STRING,
    result: DataTypes.STRING,
  });
  return Animaldb;
};

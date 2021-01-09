module.exports = (sequelize, DataTypes) => {
  const db = sequelize.define("dbname", {
    Key: DataTypes.STRING,
  });
  return db;
};

module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define("Komik", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      autoIncrement: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};
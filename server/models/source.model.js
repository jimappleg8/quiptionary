const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Source = sequelize.define("source", {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    citation: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Source;
};
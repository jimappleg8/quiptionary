const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const DefinitionIndex = sequelize.define("definitionIndex", {
    definitionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    word: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    freezeTableName: true,
    timestamps: false
  });
  
  DefinitionIndex.removeAttribute('id');

  return DefinitionIndex;
};
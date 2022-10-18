const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Definition_index = sequelize.define("definition_index", {
    definition_id: {
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
  
  Definition_index.removeAttribute('id');

  return Definition_index;
};
const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Definition = sequelize.define("definition", {
    entryWord: {
      type: DataTypes.STRING,
      allowNull: false
    },
    partOfSpeech: {
      type: DataTypes.STRING,
      allowNull: false
    },
    plural: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    originalQuote: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    attributedTo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    other_sources: {
      type: DataTypes.STRING,
      allowNull: false
    },
    definitionType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    keywords: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categories: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source : {
      type: DataTypes.STRING,
      allowNull: false
    },
    context: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'N'
    }
  });

  return Definition;
};
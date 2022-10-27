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
      allowNull: true
    },
    source_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    other_sources: {
      type: DataTypes.STRING,
      allowNull: true
    },
    definitionType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keywords: {
      type: DataTypes.STRING,
      allowNull: true
    },
    categories: {
      type: DataTypes.STRING,
      allowNull: true
    },
    source : {
      type: DataTypes.STRING,
      allowNull: true
    },
    context: {
      type: DataTypes.STRING,
      allowNull: true
    },
    game: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'N'
    }
  });

  return Definition;
};
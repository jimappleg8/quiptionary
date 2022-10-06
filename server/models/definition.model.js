const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Definition = sequelize.define("definition", {
    entry_word: {
      type: DataTypes.STRING,
      allowNull: false
    },
    part_of_speech: {
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
    original_quote: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
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
    definition_type: {
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
    sort: {
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
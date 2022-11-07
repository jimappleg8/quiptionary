const dbConfig = require('../config/db.config.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.definition = require("./definition.model.js")(sequelize, Sequelize);
db.definitionIndex = require("./definitionIndex.model.js")(sequelize, Sequelize);
db.source = require("./source.model.js")(sequelize, Sequelize);

db.definition.hasMany(db.definitionIndex, {
  foreignKey: 'definitionId'
});
db.definitionIndex.belongsTo(db.definition)

db.definitionSource = db.sequelize.define("definitionSource", {
  definitionId: {
    type: DataTypes.INTEGER,
    references: {
      model: db.definition,
      key: 'id'
    }
  },
  sourceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: db.source,
      key: 'id'
    }
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false
  },
  attributedTo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  citedSource: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  isPrimary: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  }
});
db.definition.belongsToMany(db.source, { through: db.definitionSource });
db.source.belongsToMany(db.definition, { through: db.definitionSource });


module.exports = db;
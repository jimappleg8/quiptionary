const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
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
db.definition_index = require("./definition_index.model.js")(sequelize, Sequelize);
db.source = require("./source.model.js")(sequelize, Sequelize);

db.definition.hasMany(db.definition_index, {
  foreignKey: 'definition_id'
});
db.definition_index.belongsTo(db.definition)

module.exports = db;
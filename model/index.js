const config = require("../config")
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 80,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.vehicles = require("./vehicle.model.js")(sequelize, Sequelize);
db.records = require("./record.model.js")(sequelize, Sequelize);
db.drivers = require("./driver.model.js")(sequelize, Sequelize);
module.exports = db;
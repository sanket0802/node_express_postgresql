//require('dotenv').config(); // Load environment variables from .env file or use a different method to load from db_config.js

const dbConfig = require('../config/db.config.js'); // Load database configuration

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.POSTGRES_URL, // Use the direct database URL here
  {
    dialect: dbConfig.dialect,
    ssl: dbConfig.POSTGRES_URL.includes("sslmode=require"), // Check if SSL is required in the URL
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    },
    // Additional configurations can be added here if needed
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Assuming tutorial.model.js exports a function that defines the model
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;


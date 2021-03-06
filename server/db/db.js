const mysql = require("mysql2");
// const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'docker',
  password: 'docker',
  database: 'test'
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
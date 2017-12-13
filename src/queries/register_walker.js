const databaseConnection = require('../database/db_connections.js')

const register_walker = (walkerObj, cb) => {
  databaseConnection.query(
    `INSERT INTO pets(name, password, email) VALUES ($1, $2, $3)`, [walkerObj.name, walkerObj.password, walkerObj.email], (err) => {
      if (err) {
        cb(err);
      } else {
        cb(null, 'signed-up');
      }
    });
  };

module.exports = register_walker;

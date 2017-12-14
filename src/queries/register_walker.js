const databaseConnection = require('../database/db_connections.js')

const register_walker = (walkerObj, cb) => {
  databaseConnection.query(
    `INSERT INTO walkers(name, password, email) VALUES ($1, $2, $3)`, [walkerObj.registerWalkerName, walkerObj.registerWalkerPassword, walkerObj.registerWalkerEmail], (err) => {
      if (err) {
        cb(err);
      } else {
        cb(null, 'signed-up');
      }
    });
  };

module.exports = register_walker;

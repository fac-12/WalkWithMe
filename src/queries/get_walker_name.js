const databaseConnection = require('../database/db_connections.js')

const get_walker_name = (email, cb) => {
  databaseConnection.query(
    `SELECT walkers.name FROM walkers WHERE walkers.email = $1`, [email], (err, res) => {
      if (err) cb(err);
      else cb(null, res);
    });
  };

module.exports = get_walker_name;

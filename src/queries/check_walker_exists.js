const databaseConnection = require('./../database/db_connections.js')

const check_walker_exists = (walkerObj, cb) => {
  databaseConnection.query(
    `SELECT CASE WHEN EXISTS(SELECT email FROM walkers WHERE email = $1) THEN CASE (true AS BOOLEAN) ELSE CAST (false as BOOLEAN) END`, [walkerObj.email] (err, res) => {
      if (err) cb(err);
      else cb(null, res.rows);
    });
  };

module.exports = check_walker_exists;

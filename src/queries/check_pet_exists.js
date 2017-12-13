const databaseConnection = require('./../database/db_connections.js')

const check_pet_exists = (petObj, cb) => {
  databaseConnection.query(
    `SELECT CASE WHEN EXISTS(SELECT email FROM pets WHERE email = $1) THEN CASE (true AS BOOLEAN) ELSE CAST (false as BOOLEAN) END`, [petObj.email] (err, res) => {
      if (err) cb(err);
      else cb(null, res.rows);
    });
  };

module.exports = check_pet_exists;

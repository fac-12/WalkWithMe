const databaseConnection = require('../database/db_connections.js')

const check_pet_password = (email, cb) => {
  databaseConnection.query(
    `SELECT password FROM pets WHERE email=$1`, [email], (err, res) => {
      if (err) cb(err);
      else cb(null, res);
    });
  };


module.exports = check_pet_password;

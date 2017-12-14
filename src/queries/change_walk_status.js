const databaseConnection = require('../database/db_connections.js')

const change_walk_status = (walksId, cb) => {
  databaseConnection.query(
    'UPDATE walks SET status = true',
    (err, res) => {
      if (err) cb(err);
      else cb(null, res);
    });
  };


module.exports = check_pet_password;

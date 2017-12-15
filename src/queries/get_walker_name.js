const databaseConnection = require('../database/db_connections.js')

const get_pet_id = (email, cb) => {
  databaseConnection.query(
    `SELECT pets.id, pets.name FROM pets WHERE pets.email = $1`, [email], (err, res) => {
      if (err) cb(err);
      else cb(null, res);
    });
  };

module.exports = get_pet_id;

const databaseConnection = require('../database/db_connections.js')

const get_pet_own_walks = (petId, cb) => {
  databaseConnection.query(
    `SELECT walks.walk_date, walks.walk_time FROM walks INNER JOIN pets ON walks.pet_id = pets.id WHERE pets.id = $1`, [petId], (err, res) => {
      if (err) cb(err);
      else cb(null, res.rows);
    });
  };

module.exports = get_pet_own_walks;

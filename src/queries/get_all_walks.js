const databaseConnection = require('../database/db_connections.js')

const get_all_walks = (cb) => {
  databaseConnection.query(
    `SELECT pets.name, pets.photourl, pets.type, walks.id, walks.postcode, walks.walk_date, walks.walk_time FROM walks INNER JOIN pets ON walks.pet_id = pets.id WHERE walks.status = false`, (err, res) => {
      if (err) cb(err);
      else cb(null, res.rows);
    });
  };

module.exports = get_all_walks;

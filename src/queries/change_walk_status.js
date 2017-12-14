const databaseConnection = require('../database/db_connections.js')

const change_walk_status = (walksId, cb) => {
  databaseConnection.query(
    'UPDATE walks SET status = true WHERE id = $1', [walksId],
    (err, res) => {
      if (err) cb(err);
      else cb(null, 'status changed');
    });
  };


module.exports = change_walk_status;

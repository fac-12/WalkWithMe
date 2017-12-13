const databaseConnection = require('../database/db_connections.js');

const new_walk = (newWalkObj, cb) => {
    databaseConnection.query(
        'INSERT INTO walks (pet_id, postcode, walk_date, walk_time, status) VALUES ($1, $2, $3, $4, $5)', [newWalkObj.pet_id, newWalkObj.postcode, newWalkObj.walk_date, newWalkObj.walk_time, false],
        (err, res) => {
            if (err) {
                return cb(err);
            } else {
                cb(null, 'walk-added');
            }
        })
};

module.exports = new_walk;

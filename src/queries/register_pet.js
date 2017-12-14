const databaseConnection = require('../database/db_connections.js')

const register_pet = (petObj, cb) => {
  databaseConnection.query(
    `INSERT INTO pets(name, password, email, photourl, type) VALUES ($1, $2, $3, $4, $5)`, [petObj.registerPetName, petObj.registerPetPassword, petObj.registerPetEmail, petObj.registerPetPicture, petObj.registerPetType], (err) => {
      if (err) {
        cb(err);
      } else {
        cb(null, 'signed-up');
      }
    });
  };

module.exports = register_pet;

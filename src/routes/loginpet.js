const bcrypt = require('bcryptjs');
const check_pet_exists = require('../queries/check_pet_exists');
const check_password_exists = require('../queries/register_pet');

exports.post = (req, res) => {
  console.log(req.body);
  const petDetails = req.body;
  check_pet_exists(petDetails.petEmailLogin, (err, queryRes) => {
    if(err){
      throw err;
    }else if(queryRes[0].case === false){
      console.log('you dont exist');
      req.flash('error_msg','You do not have an account. Please register.');
      res.redirect('/');
    } else{
      
    }
  })

};

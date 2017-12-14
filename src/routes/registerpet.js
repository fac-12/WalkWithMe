const bcrypt = require('bcryptjs');
const check_pet_exists = require('../queries/check_pet_exists');
const register_pet = require('../queries/register_pet');

exports.post = (req, res) => {
  const petDetails = req.body;
  check_pet_exists(petDetails.registerPetEmail, (err,queryRes) => {
    if(err){
      res.status(500);
    }else if(queryRes[0].case === true){
      req.flash('error_msg','You already have an account, please login');
      res.redirect('/');
    } else {
      bcrypt.genSalt(10,(err,salt) => {
        if(err)
            res.status(500);
        else{
          bcrypt.hash(petDetails.registerPetPassword,salt,(err,hash) => {
            if(err){
              res.status(500);
            }
            else{
              petDetails.registerPetPassword = hash;
              register_pet(petDetails, (err, queryRes) => {
                if(err){
                  res.status(500)
                } else{
                  req.session.cookie.Loggedin = true;
                  req.flash('success', queryRes)
                  res.redirect('/petUniqueWalk')
                }
              })
            }
          });
        }
      })
    }


  })
  console.log(req.body);

};


// bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
//     // Store hash in your password DB.
// });

const bcrypt = require('bcryptjs');
const check_pet_exists = require('../queries/check_pet_exists');
const register_pet = require('../queries/register_pet');
const get_pet_id = require('../queries/get_pet_id');

exports.post = (req, res, next) => {
  const petDetails = req.body;
  check_pet_exists(petDetails.registerPetEmail, (err,queryRes) => {
    if(err){
      next(err);
    }else if(queryRes[0].case === true){
      req.flash('error_msg','You already have an account, please login');
      res.redirect('/');
    } else {
      bcrypt.genSalt(10,(err,salt) => {
        if(err)
            next(err);
        else{
          bcrypt.hash(petDetails.registerPetPassword,salt,(err,hash) => {
            if(err){
              next(err);
            }
            else{
              petDetails.registerPetPassword = hash;
              register_pet(petDetails, (err, queryRes) => {
                if(err){
                  next(err);
                } else{
                  req.session.Loggedin = true;
                  get_pet_id(petDetails.registerPetEmail, (qErr, qRes) => {
                    if(qErr) next(err);
                    else {
                      let uniquePetId = qRes.rows[0].id;

                      req.session.petid = uniquePetId;
                      console.log('rs login', req.session);
                      res.redirect('/petUniqueWalk');
                    }
                  })
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

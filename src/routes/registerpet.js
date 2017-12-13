const bcrypt = require('bcryptjs');
const check_pet_exists = require('../queries/check_pet_exists');


exports.post = (req, res) => {
  const petDetails = req.body;
  check_pet_exists(petDetails.registerPetEmail, (err,res) => {
    if(err){
      throw err;
    }else if(res === true){
      console.log('you exist');
      req.flash('error_msg','You already have an account, please login');
      res.redirect('/');
    }


  })

  // bcrypt.genSalt(10,(err,salt) => {
  //   if(err)
  //       throw err;
  //   else{
  //     bcrypt.hash(petDetails.registerPetPasswor,salt,(err,hash) => {
  //       if(err){
  //         throw err;
  //       }
  //
  //
  //       req.body.registerPetPassword = hash;
  //
  //     });
  //   }
  // })
  console.log(req.body);

};


// bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
//     // Store hash in your password DB.
// });

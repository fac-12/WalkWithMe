
const bcrypt = require('bcryptjs');
const check_pet_exists = require('../queries/check_pet_exists');


exports.post = (req, res) => {
  const petDetails = req.body;
console.log(req.body.password);
  const hashPassword = (password, callback) => {
          bcrypt.hash(password, 10, (bcrypt_err, bcrypt_res) => {
            if (bcrypt_err) callback(bcrypt_err);
            else callback(null, bcrypt_res);
          });
        };
  hashPassword(req.body.password,(hash_err,hash_res) => {
    if(hash_err)
     console.log(hash_err);
    else
    console.log(hash_res);
  })
  // check_pet_exists(petDetails.registerPetEmail, (err,res) => {
  //   if(err){
  //     throw err;
  //   }else if(res === true){
  //     console.log('you exist');
  //     req.flash('error_msg','You already have an account, please login');
  //     res.redirect('/');
  //   }
  //
  //
  // })

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


};


// bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
//     // Store hash in your password DB.
// });

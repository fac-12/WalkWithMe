const bcrypt = require('bcryptjs');
const check_pet_exists = require('../queries/check_pet_exists');
const check_pet_password = require('../queries/check_pet_password');
const get_pet_id = require('../queries/get_pet_id');

exports.post = (req, res) => {
  const petDetails = req.body;
  check_pet_exists(petDetails.petEmailLogin, (err, queryRes) => {
    if (err) {
      throw err;
    } else if (queryRes[0].case === false) {
      req.flash('error_msg', 'You do not have an account. Please register.');
      res.redirect('/');
    } else {
      check_pet_password(petDetails.petEmailLogin, (err, queryRes) => {
        if (err) console.log(err);
        else {
          const password = queryRes.rows[0].password;
          bcrypt.compare(petDetails.petPasswordLogin, password, (err, bcryptRes) => {
            if (err) console.log(err);
            else {
              if (bcryptRes === false) {
                req.flash('error_msg', 'Incorrect Password, please try again');
                res.redirect('/');
              } else if(bcryptRes === true) {
                req.session.Loggedin = true;
                get_pet_id(petDetails.petEmailLogin, (qErr, qRes) => {
                  if(qErr) console.log(qErr);
                  else {
                    let uniquePetId = qRes.rows[0].id;

                    req.session.petid = uniquePetId;
                    res.redirect('/petUniqueWalk');
                  }
                })

              }

            }
          })
        }
      })
    }
  })
}

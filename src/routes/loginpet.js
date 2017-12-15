const bcrypt = require('bcryptjs');
const check_pet_exists = require('../queries/check_pet_exists');
const check_pet_password = require('../queries/check_pet_password');
const get_pet_id = require('../queries/get_pet_id');

exports.post = (req, res, next) => {
  const petDetails = req.body;
  check_pet_exists(petDetails.petEmailLogin, (err, queryRes) => {
    if (err) {
      next(err);
    } else if (queryRes[0].case === false) {
      req.flash('error_msg', 'You do not have an account. Please register.');
      res.redirect('/');
    } else {
      check_pet_password(petDetails.petEmailLogin, (err, queryRes) => {
        if (err) next(err);
        else {
          const password = queryRes.rows[0].password;
          bcrypt.compare(petDetails.petPasswordLogin, password, (err, bcryptRes) => {
            if (err) next(err);
            else {
              if (bcryptRes === false) {
                req.flash('error_msg', 'Incorrect Password, please try again');
                res.redirect('/');
              } else if(bcryptRes === true) {
                req.session.Loggedin = true;
                get_pet_id(petDetails.petEmailLogin, (qErr, qRes) => {
                  if(qErr) next(err);
                  else {
                    let uniquePetId = qRes.rows[0].id;
                    let uniquePetName = qRes.rows[0].name;
                    req.session.name = uniquePetName;
                    req.session.petid = uniquePetId;
                    console.log('rs login', req.session);
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

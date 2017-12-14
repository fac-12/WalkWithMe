const bcrypt = require('bcryptjs');
const check_pet_exists = require('../queries/check_pet_exists');
const check_pet_password = require('../queries/check_pet_password');

exports.post = (req, res) => {
  console.log(req.body);
  const petDetails = req.body;
  check_pet_exists(petDetails.petEmailLogin, (err, queryRes) => {
    if (err) {
      throw err;
    } else if (queryRes[0].case === false) {
      console.log('you dont exist');
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
              } else if (bcryptRes === true) {
                req.session.cookie.Loggedin = true;
                req.flash('success', 'You are now logged in');
                res.redirect('/');
              }

            }
          })
        }
      })
    }
  })
}

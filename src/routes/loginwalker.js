const bcrypt = require('bcryptjs');
const check_walker_exists = require('../queries/check_walker_exists');
const check_walker_password = require('../queries/check_walker_password');

exports.post = (req, res) => {
  console.log(req.body);
  const walkerDetails = req.body;
  check_walker_exists(walkerDetails.walkerEmailLogin, (err, queryRes) => {
    if(err){
      throw err;
    }else if(queryRes[0].case === false){
      console.log('you dont exist');
      req.flash('error_msg','You do not have an account. Please register.');
      res.redirect('/');
    } else{
      check_walker_password(walkerDetails.walkerEmailLogin, (err, queryRes) => {
        if(err) console.log(err);
        else {
          const password = queryRes.rows[0].password;
          bcrypt.compare(walkerDetails.walkerPasswordLogin, password, (err, bcryptRes) => {
            if(err) console.log(err);
            else {
              if(bcryptRes === false) {
                req.flash('error_msg', 'Incorrect Password, please try again');
                res.redirect('/');
              } else if(bcryptRes === true) {
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

};

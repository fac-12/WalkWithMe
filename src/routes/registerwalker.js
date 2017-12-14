const bcrypt = require('bcryptjs');
const check_walker_exists = require('../queries/check_walker_exists');
const register_walker = require('../queries/register_walker');
//const availablePetWalks = require()

exports.post = (req, res) => {
  const walkerDetails = req.body;
  check_walker_exists(walkerDetails.registerWalkerEmail, (err,queryRes) => {
    if(err){
      console.log('register DB check walker exist' ,err);
      res.status(500);
    }else if(queryRes[0].case === true){
      req.flash('error_msg','You already have an account, please login');
      res.redirect('/');
    } else {
      bcrypt.genSalt(10,(err,salt) => {
        if(err){
            console.log('register gen salt exist' ,err);
            res.status(500);
       }  else{
          bcrypt.hash(walkerDetails.registerWalkerPassword,salt,(err,hash) => {
            if(err){
              console.log('register bcrypt error' ,err);
              res.status(500);
            }
            else{
              walkerDetails.registerWalkerPassword = hash;
              register_walker(walkerDetails, (err, queryRes) => {
                if(err){
                  console.log('register DB_register walker' ,err);
                  res.status(500);
                } else{
                  req.session.cookie.Loggedin = true;
                  req.flash('success', queryRes)
                  res.redirect('/availablePetWalks')
                }
              })
            }
          });
        }
      })
    }


  })

};

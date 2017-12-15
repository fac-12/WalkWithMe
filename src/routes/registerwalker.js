const bcrypt = require('bcryptjs');
const check_walker_exists = require('../queries/check_walker_exists');
const register_walker = require('../queries/register_walker');
//const availablePetWalks = require()

exports.post = (req, res, next) => {
  const walkerDetails = req.body;
  check_walker_exists(walkerDetails.registerWalkerEmail, (err,queryRes) => {
    if(err){
      next(err);
    } else if(queryRes[0].case === true){
      req.flash('error_msg','You already have an account, please login');
      res.redirect('/');
    } else {
      bcrypt.genSalt(10,(err,salt) => {

        if(err)
            next(err);
        else{
          bcrypt.hash(walkerDetails.registerWalkerPassword,salt,(err,hash) => {
            if(err){
              next(err);
            } else{
              walkerDetails.registerWalkerPassword = hash;
              register_walker(walkerDetails, (err, queryRes) => {
                if(err){
                  next(err);
                } else {
                  req.session.name = walkerDetails.registerWalkerName;
                  req.session.Loggedin = true;
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

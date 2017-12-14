const bcrypt = require('bcryptjs');
const check_walker_exists = require('../queries/check_walker_exists');
const register_walker = require('../queries/register_walker');

exports.post = (req, res) => {
  console.log(req.body);
  const walkerDetails = req.body;
  check_walker_exists(walkerDetails.registerWalkerEmail, (err,queryRes) => {
    console.log("Query res: ", queryRes);
    if(err){
      throw err;
    }else if(queryRes[0].case === true){
      console.log('you exist');
      req.flash('error_msg','You already have an account, please login');
      res.redirect('/');
    } else {
      console.log("Cookie :", req.session);
      bcrypt.genSalt(10,(err,salt) => {
        if(err)
            throw err;
        else{
          bcrypt.hash(walkerDetails.registerWalkerPassword,salt,(err,hash) => {
            if(err){
              throw err;
            }
            else{
              walkerDetails.registerWalkerPassword = hash;
              register_walker(walkerDetails, (err, queryRes) => {
                if(err){
                  throw err
                } else{
                  req.session.cookie.Loggedin = true;
                  req.flash('success', queryRes)
                  res.redirect('/')
                }
              })
            }
          });
        }
      })
    }


  })

};

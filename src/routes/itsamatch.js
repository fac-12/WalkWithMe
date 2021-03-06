const change_walk_status = require('../queries/change_walk_status');

exports.post = (req, res, next) =>{
  if(req.session.Loggedin === true) {
    const id =req.body.walkid;
    const petemail = req.body.petemail;
    change_walk_status(id, (err, queryRes) => {
      if(err){
      next(err);
      } else{
        req.flash('success', 'You\'ve been matched! Please contact the pet by emailing ' + petemail);
        res.redirect('/availablePetWalks');
      }
    })
  } else {
    res.status(403).render('error', {
      layout: 'error',
      statusCode: 403,
      errorMessage: 'Forbidden path',
    });
   }
  }

const new_walks = require('../queries/new_walk');

exports.post = (req, res, next) => {
  if(req.session.Loggedin === true) {
    const newWalkObj = {
      pet_id: req.session.petid,
      postcode: req.body.newwalkpostcode,
      walk_date : req.body.newwalkdate,
      walk_time : req.body.newwalktime
    }
    new_walks(newWalkObj, (err, queryRes) => {
      if(err) {
        next(err);
      } else {
        req.flash('success', 'Your walk has been added, please wait for a walker to email you!');
        res.redirect('/petUniqueWalk')
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

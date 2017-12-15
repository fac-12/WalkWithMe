const get_pet_own_walks = require('../queries/get_pet_own_walks');

exports.get = (req, res, next) => {
   if(req.session.Loggedin === true) {
     const petid = req.session.petid;
     get_pet_own_walks(petid, (err, getPetRes) => {
       if (err) next(err);
       else {
        res.render('petdisplaywalks', { allWalks: getPetRes })
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

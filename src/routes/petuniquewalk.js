const get_pet_own_walks = require('../queries/get_pet_own_walks');

exports.get = (req, res, next) => {
   console.log("rs petuniquewalk ", req.session);
   if(req.session.Loggedin === true) {
     const petid = req.session.petid;
     console.log("petID", petid);
     get_pet_own_walks(petid, (err, getPetRes) => {
       if (err) next(err);
       else {
        const petname = req.session.name;
        res.render('petdisplaywalks', { allWalks: getPetRes, petName: petname })
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

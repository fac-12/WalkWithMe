const get_pet_own_walks = require('../queries/get_pet_own_walks');

exports.get = (req, res) => {
   console.log("rs petuniquewalk ", req.session);
   const petid = req.session.petid;
   get_pet_own_walks(petid, (err, getPetRes) => {
      if (err) res.status(500);
      else {
        res.render('petdisplaywalks', { allWalks: getPetRes })
      }
   })
}

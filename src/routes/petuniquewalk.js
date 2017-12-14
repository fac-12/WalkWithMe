const get_pet_own_walks = require('../queries/get_pet_own_walks');

exports.get = (req, res) => {
   const petid = req.session.petid;
   get_pet_own_walks(petid, (err, getPetRes) => {
      if (err) res.status(500);
      else {
        res.render('petdisplaywalks', { allWalks: getPetRes })
      }
   })
}

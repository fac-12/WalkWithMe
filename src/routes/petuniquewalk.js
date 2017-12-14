const get_pet_own_walks = require('../queries/get_pet_own_walks');

exports.get = (req, res) => {
   const petid = req.session.petid;
   get_pet_own_walks(petid, (err, getPetRes) => {
      if (err) console.log(err);
      else {
        res.render('petdisplaywalks', { allWalks: getPetRes })
      }
   })
}

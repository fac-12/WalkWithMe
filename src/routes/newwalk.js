const new_walks = require('../queries/new_walk');

exports.post = (req, res) => {
console.log("rs new walk", req.session);
  const newWalkObj = {
    pet_id: req.session.petid,
    postcode: req.body.newwalkpostcode,
    walk_date : req.body.newwalkdate,
    walk_time : req.body.newwalktime
  }
  console.log(newWalkObj);
  new_walks(newWalkObj, (err, queryRes) => {
    if(err) {
      res.status(500)
    } else {
      req.flash('success', 'Your walk has been added, please wait for a walker to email you!');
      res.redirect('/petUniqueWalk')
    }
  })

}

const change_walk_status = require('../queries/change_walk_status');

exports.post = (req, res) =>{
  const id =req.body.walkid;
  const petemail = req.body.petemail;
  change_walk_status(id, (err, queryRes) => {
    if(err){
      res.status(500);
    } else{
      req.flash('success', 'You\'ve been matched! Please contact the pet by emailing ' + petemail);
      res.redirect('/availablePetWalks');
    }
  })
}

const new_walks = requre('../queries/new_walks');

exports.post(req, res) => {

  const newWalkObj = {
    pet_id: req.session.petid;
    postcode: req.body.newwalkpostcode;
    walk_date : req.body.newwalkdate;
    walk_time : req.body.newwalktime;
  }
  console.log(newWalkObj);
  new_walks(newWalkObj, (err, queryRes) => {
    if(err) {
      throw err
    } else {
      req.flash('success', 'Your walk has been added, please wait for a walker to email you!');
      res.redirect('/petUniqueWalk')
    }
  })

}

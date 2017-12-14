const get_all_walks = require('../queries/get_all_walks');

exports.get = (req, res) =>{
  get_all_walks((err, queryRes) => {
    if(err){
      res.status(500)
    } else {
      res.render('displayWalks', {allWalks: queryRes})
    }
  })

}

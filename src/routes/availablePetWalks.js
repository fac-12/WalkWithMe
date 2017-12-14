const get_all_walks = require('../queries/get_all_walks');

exports.get = (req, res) =>{
  get_all_walks((err, queryRes) => {
    if(err){
      console.log(err)
    } else {
      res.render('displayWalks', {allWalks: queryRes})
    }
  })

}

const get_all_walks = require('../queries/get_all_walks');

exports.get = (req, res, next) =>{
  if(req.session.Loggedin === true){
    get_all_walks((err, queryRes) => {
      if(err){
        next(err);
      } else {
        res.render('displayWalks', {allWalks: queryRes})
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

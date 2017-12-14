exports.post = (req, res) =>{
  req.session.Loggedin=false;
  res.redirect('/');


}

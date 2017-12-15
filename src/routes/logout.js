exports.post = (req, res) =>{
  req.session.destroy();
  res.redirect('/');
}

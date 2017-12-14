exports.post = (req, res) =>{
  console.log("Log out session: ", req.session);
  req.session.destroy();
  res.redirect('/');
}

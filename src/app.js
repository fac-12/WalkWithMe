const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
// import 'express-handlebars'
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// import helpers


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    // helpers,
  })
);

app.use(session({
  secret: process.env.SECRET,
  saveUninitialized: false,
  resave:false,
}));

app.use((req,res,next) => {
  res.locals.success = req.flash('success');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
})

app.set('port', process.env.PORT || 3000);
// app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(routes);


module.exports = app;

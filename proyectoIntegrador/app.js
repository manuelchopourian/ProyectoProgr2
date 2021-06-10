var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session =require('express-session')
let db = require('./database/models')

var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
var profileRouter = require('./routes/profile');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "nuestro mensaje secreto",
  resave: false,
  saveUninitialized: true}));

// sesion

app.use(function(req, res, next){
  if(req.session.user != undefined){
    res.locals.user = req.session.user
    
  }
  return next()
})
app.use((req, res, next) => {
  if(req.cookies.userId != undefined && req.session.user == undefined){
    db.User.findByPk(req.cookies.userId)
      .then(user =>{
        req.session.user = user
        res.locals = req.session.user
        return next()
      })
      .catch( error => console.log(error))
  }
  else{
    return next()

  }
 

});




app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/profile', profileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

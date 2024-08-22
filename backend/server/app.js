const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const taskRouter = require('./routes/task');
const duanRouter = require('./routes/duan');
const cors = require('cors')



const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Cho phép tất cả các origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Cho phép các phương thức
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // Cho phép các header
  next();
});





app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', taskRouter);
app.use('/duans', duanRouter);



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

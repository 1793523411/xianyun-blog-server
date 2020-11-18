var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// var cors = require("cors");
const bodyParser = require("body-parser");
// const { createProxyMiddleware } = require('http-proxy-middleware');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// app.use('/api', createProxyMiddleware({
//   target: 'http://openapi.xianyun.site',
//   changeOrigin: true,
//   pathRewrite: {
//       '^/api': '/'
//   }
// }));

app.all('*', function (req, res, next) {
  // res.header('Access-Control-Allow-Origin', 'http://ice-blog-server.ygjie.icu');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Token, x-requested-with');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

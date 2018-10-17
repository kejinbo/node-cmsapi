require("./models/getnewslistdb");

var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");

var routes = require("./routes/index");
var users = require("./routes/users");

//导入API模块的路由
var getnewslist = require("./routes/api/getnewslist");
var getlunbo = require("./routes/api/getlunbo");
var getnewinfo = require("./routes/api/getnewinfo");
var getimages = require("./routes/api/getimages");
var getimgcategory = require("./routes/api/getimgcategory");
var gettiamgeinfo = require("./routes/api/gettiamgeinfo");
var getthumimages = require("./routes/api/getthumimages");
var getgoods = require("./routes/api/getgoods");
var getgoodsinfo = require("./routes/api/getgoodsinfo");
var getdesc = require("./routes/api/getdesc");
var getshopcarlist = require("./routes/api/getshopcarlist")

var app = express();

// view engine setup 官方推荐的模板引擎
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

//使用 art-template模板
app.engine("html", require("express-art-template"));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(
//   cors({
//     //只有http://localhost可以访问请求，其他都为跨域，安全，需要启动一个本地服务
//     origin: ["http://localhost"],
//     methods: ["GET", "POST"],
//     alloweHeaders: ["Conten-Type", "Authorization"]
//   })
// );
app.use(cors());

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, "public")));
app.use("/public/", express.static(path.join(__dirname, "/public/")));

//注册路由
app.use("/", routes);
app.use("/users", users);
app.use("/getnewslist", getnewslist);
app.use("/getlunbo", getlunbo);
app.use("/getnewinfo", getnewinfo);
app.use("/getimages", getimages);
app.use("/getimgcategory", getimgcategory);
app.use("/gettiamgeinfo",gettiamgeinfo);
app.use("/getthumimages",getthumimages);
app.use("/getgoods", getgoods);
app.use("/getgoodsinfo",getgoodsinfo);
app.use("/getdesc",getdesc);
app.use("/getshopcarlist",getshopcarlist)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error.html", {
    message: err.message,
    error: {
      status: err.status
    }
  });
});

module.exports = app;

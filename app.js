var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const mongoose = require("mongoose");
var db = mongoose.connection;


var Lion = require("./models/Lion");
var LionRouter = require("./routes/Lion");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var addmodsRouter = require("./routes/addmods");
var selectorRouter = require("./routes/selector");
//var Lion = require("./models/Lion");
var resourceRouter = require('./routes/resource');


// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Lion.deleteMany();

  let instance1 = new Lion({
    Lion_type: "Barbary",
    size: "medium",
    cost:455,
  });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved");
  });
  let instance2 = new Lion({
    Lion_type: "Asiatic",
    size: "Large",
    cost: 800,
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("second object saved");
  });
  let instance3 = new Lion({
    Lion_type: "Congo",
    size: "Extra Large",
    cost: 700,
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("third object saved");
  });
}

let reseed = true;
if (reseed) {
  recreateDB();
}

var app = express();
const connectionString ='mongodb+srv://Harshu8118:Harshu8118@cluster0.7ykak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(connectionString, {
  useNewUrlParser: true,
   useUnifiedTopology: true,
 });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});


app.use("/", indexRouter);
app.use("/Lion", LionRouter);
app.use("/users", usersRouter);
app.use("/selector", selectorRouter);
app.use("/addmods", addmodsRouter);
app.use("/Lion", LionRouter);
app.use('/resource', resourceRouter);

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
const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  Task = require("./api/models/Task"),
  User = require("./api/models/User"),
  bodyParser = require("body-parser"),
  CONST = require("./api/components/CONST");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(CONST.MONGO_DB);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./api/config/session")(app);
require("./api/config/passport")(app);
require("./api/routes")(app);

app.listen(CONST.PORT);

console.log("todo list RESTful API server started on: " + CONST.PORT);

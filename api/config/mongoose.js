"use strict";

module.exports = function(app) {
  const mongoose = require("mongoose"),
    CONST = require("../components/CONST");
  //Register Schemas
  const Task = require("../models/Task"),
    User = require("../models/User");

  mongoose.Promise = global.Promise;
  mongoose.connect(CONST.MONGO_DB);
};

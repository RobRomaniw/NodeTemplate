"use strict";

module.exports = function(app) {
  const bodyParser = require("body-parser");
  const helmet = require("helmet");

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(helmet());
};

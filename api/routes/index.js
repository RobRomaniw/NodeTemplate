"use strict";

module.exports = app => {
  app.use("/user", require("./user"));
  app.use("/task", require("./task"));
};

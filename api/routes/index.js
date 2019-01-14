"use strict";
let cors = require("../middleware/cors");

module.exports = app => {
  app.use(cors);
  app.use("/user", require("./user"));
  app.use("/task", require("./task"));
};

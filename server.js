const express = require("express"),
  app = express(),
  CONST = require("./api/components/CONST");

require("./api/config/mongoose")(app);
require("./api/config/conf")(app);
require("./api/config/session")(app);
require("./api/config/passport")(app);
require("./api/routes")(app);

app.listen(CONST.PORT);

console.log("REST API server started on: " + CONST.PORT);

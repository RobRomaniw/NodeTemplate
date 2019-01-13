"use strict";
const crypto = require("crypto"),
  session = require("express-session"),
  utils = require("../components/utilities"),
  CONST = require("../components/CONST"),
  MongoStore = require("connect-mongo")(session);

module.exports = function(app) {
  const cookie_options = {
    path: "/",
    httpOnly: true,
    secure: "auto",
    maxAge: utils.minutesToMilliseconds(CONST.DEFAULT_TIMEOUT_MINUTES)
  };

  const mongo_store_options = {
    url: CONST.MONGO_DB
  };

  const session_options = {
    cookie: cookie_options,
    resave: false,
    rolling: true,
    saveUninitialized: true,
    secret: crypto.randomBytes(64).toString("hex"),
    store: new MongoStore(mongo_store_options)
  };

  app.use(session(session_options));
};

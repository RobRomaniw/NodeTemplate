"use strict";

const express = require("express"),
  router = express.Router(),
  user_controller = require("../../controllers/user_controller");

router.post("/addUser", user_controller.addUser);
router.post("/login", user_controller.login);
router.post("/logout", user_controller.logout);

module.exports = router;

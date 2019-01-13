"use strict";

const express = require("express"),
  router = express.Router(),
  task_controller = require("../../controllers/task_controller"),
  authenticate = require("../../middleware/authenticate");

router.get("/", authenticate, task_controller.list_all_tasks);
router.post("/", authenticate, task_controller.create_a_task);

router.get("/:taskId", authenticate, task_controller.read_a_task);
router.put("/:taskId", authenticate, task_controller.update_a_task);
router.delete("/:taskId", authenticate, task_controller.delete_a_task);

module.exports = router;

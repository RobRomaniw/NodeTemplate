"use strict";

const express = require("express"),
  router = express.Router(),
  task_controller = require("../../controllers/task_controller");

router.get("/", task_controller.list_all_tasks);
router.post("/", task_controller.create_a_task);

router.get("/:taskId", task_controller.read_a_task);
router.put("/:taskId", task_controller.update_a_task);
router.delete("/:taskId", task_controller.delete_a_task);

module.exports = router;

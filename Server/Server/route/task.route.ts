import {
  createTask,
  UnCompleteTask,
  CompleteTask,
} from "../controller/task.controller";
import { Router } from "express";

const router = Router();

router.route("/createtask/:userID").post(createTask);
router.route("/completetask/:userID/:taskID").patch(UnCompleteTask);
router.route("/uncompletetask/:userID/:taskID").patch(CompleteTask);

export default router;

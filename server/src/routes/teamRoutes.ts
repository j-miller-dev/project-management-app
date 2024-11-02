import { Router } from "express";
import {
  createTask,
  getTasks,
  updateTaskStatus,
} from "../controllers/taskController";
import { getTeams } from "../controllers/teamController";

const router = Router();

router.get("/", getTeams);

export default router;

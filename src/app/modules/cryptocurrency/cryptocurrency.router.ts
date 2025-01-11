import express from "express";
import { StatsController } from "./cryptocurrency.controller";

const router = express.Router();

router.post("/stats", StatsController.getStats);
router.post("/deviation", StatsController.getDeviation);

export const StatsRouter = router;

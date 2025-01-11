import express from "express";
import { CryptocurrencyController } from "./cryptocurrency.controller";

const router = express.Router();

router.get("/stats?", CryptocurrencyController.getStats);
router.get("/deviation?", CryptocurrencyController.getDeviation);

export const StatsRouter = router;

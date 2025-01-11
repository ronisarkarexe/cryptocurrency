import express from "express";
import { CryptocurrencyController } from "./cryptocurrency.controller";

const router = express.Router();

router.post("/stats", CryptocurrencyController.getStats);
router.post("/deviation", CryptocurrencyController.getDeviation);

export const StatsRouter = router;

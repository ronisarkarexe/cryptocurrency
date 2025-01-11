"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsRouter = void 0;
const express_1 = __importDefault(require("express"));
const cryptocurrency_controller_1 = require("./cryptocurrency.controller");
const router = express_1.default.Router();
router.get("/stats?", cryptocurrency_controller_1.CryptocurrencyController.getStats);
router.get("/deviation?", cryptocurrency_controller_1.CryptocurrencyController.getDeviation);
exports.StatsRouter = router;

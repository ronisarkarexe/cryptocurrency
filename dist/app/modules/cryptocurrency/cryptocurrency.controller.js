"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptocurrencyController = void 0;
const cryptocurrency_service_1 = require("./cryptocurrency.service");
const getStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { coin } = req.query;
        const result = yield cryptocurrency_service_1.CryptocurrencyService.getStats(coin);
        res.status(200).json({
            message: "Coin get successfully!",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
        });
    }
});
const getDeviation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { coin } = req.query;
        const result = yield cryptocurrency_service_1.CryptocurrencyService.getDeviation(coin);
        res.status(200).json({
            message: "Deviation get successfully!",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
        });
    }
});
exports.CryptocurrencyController = {
    getStats,
    getDeviation,
};

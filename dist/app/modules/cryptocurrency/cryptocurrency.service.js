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
exports.CryptocurrencyService = void 0;
const crypto_model_1 = require("../crypto/crypto.model");
const cryptocurrency_utils_1 = require("./cryptocurrency.utils");
const getStats = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield crypto_model_1.Crypto.findOne({ coin: payload.coin }).sort({
        createdAt: -1,
    });
    if (!result) {
        return { message: "No data found for the given coin" };
    }
    const response = {
        price: result.price,
        marketCap: parseFloat(result.market_cap.toFixed(2)),
        "24hChange": parseFloat(result.change_24h.toFixed(4)),
    };
    return response;
});
const getDeviation = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield crypto_model_1.Crypto.find({ coin: payload.coin })
        .sort({ createdAt: -1 })
        .limit(100);
    if (result.length === 0) {
        throw new Error(`No records found for coin: ${payload.coin}`);
    }
    const prices = result.map((record) => record.price);
    const deviation = (0, cryptocurrency_utils_1.calculateDeviation)(prices);
    return {
        deviation,
    };
});
exports.CryptocurrencyService = {
    getStats,
    getDeviation,
};

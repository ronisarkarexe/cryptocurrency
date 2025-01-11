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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoService = void 0;
const axios_1 = __importDefault(require("axios"));
const crypto_model_1 = require("./crypto.model");
const config_1 = __importDefault(require("../../../config"));
const CryptoSchedule = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`https://api.coingecko.com/api/v3/simple/price?x_cg_demo_api_key=${config_1.default.key}`, {
            params: {
                ids: "bitcoin,matic-network,ethereum",
                vs_currencies: "usd",
                include_market_cap: true,
                include_24hr_change: true,
            },
        });
        const data = response.data;
        for (const coinId in data) {
            const coinData = data[coinId];
            yield crypto_model_1.Crypto.create({
                coin: coinId,
                price: coinData.usd,
                market_cap: coinData.usd_market_cap,
                change_24h: coinData.usd_24h_change,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.CryptoService = {
    CryptoSchedule,
};

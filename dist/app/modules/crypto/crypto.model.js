"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crypto = void 0;
const mongoose_1 = require("mongoose");
const CryptoSchema = new mongoose_1.Schema({
    coin: { type: String, required: true },
    price: { type: Number, required: true },
    market_cap: { type: Number, required: true },
    change_24h: { type: Number, required: true },
}, { timestamps: true });
exports.Crypto = (0, mongoose_1.model)("Crypto", CryptoSchema);

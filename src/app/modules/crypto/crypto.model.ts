import { model, Schema } from "mongoose";
import { CryptoModel, ICrypto } from "./crypto.interface";

const CryptoSchema = new Schema<ICrypto, CryptoModel>(
  {
    coin: { type: String, required: true },
    price: { type: Number, required: true },
    market_cap: { type: Number, required: true },
    change_24h: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Crypto = model<ICrypto, CryptoModel>("Crypto", CryptoSchema);

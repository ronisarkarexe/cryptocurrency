import { Model } from "mongoose";

export interface ICrypto {
  coin: string;
  price: number;
  market_cap: number;
  change_24h: number;
}

export type CryptoModel = Model<ICrypto, object>;

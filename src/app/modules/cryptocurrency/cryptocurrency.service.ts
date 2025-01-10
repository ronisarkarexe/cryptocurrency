import { Crypto } from "../crypto/crypto.model";
import { IStats } from "./cryptocurrency.interface";

const getStats = async (payload: IStats) => {
  const latestEntry = await Crypto.findOne({ coin: payload.coin }).sort({
    createdAt: 1,
  });
  if (!latestEntry) {
    return { message: "No data found for the given coinId" };
  }
  const response = {
    price: latestEntry.price,
    marketCap: latestEntry.market_cap,
    "24hChange": latestEntry.change_24h,
  };
  return response;
};



export const StatsService = {
  getStats,
};

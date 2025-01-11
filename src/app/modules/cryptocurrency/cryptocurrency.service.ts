import { Crypto } from "../crypto/crypto.model";
import { ICryptoCurrency } from "./cryptocurrency.interface";
import { calculateDeviation } from "./cryptocurrency.utils";

const getStats = async (payload: string) => {
  const result = await Crypto.findOne({ coin: payload }).sort({
    createdAt: -1,
  });
  if (!result) {
    return { message: `No record found for the given coin: ${payload}` };
  }
  const response = {
    price: result.price,
    marketCap: parseFloat(result.market_cap.toFixed(2)),
    "24hChange": parseFloat(result.change_24h.toFixed(4)),
  };
  return response;
};

const getDeviation = async (payload: string) => {
  const result = await Crypto.find({ coin: payload })
    .sort({ createdAt: -1 })
    .limit(100);

  if (result.length === 0) {
    throw new Error(`No records found for the given coin: ${payload}`);
  }
  const prices = result.map((record) => record.price);
  const deviation = calculateDeviation(prices);
  return {
    deviation,
  };
};

export const CryptocurrencyService = {
  getStats,
  getDeviation,
};

import axios from "axios";
import { Crypto } from "./crypto.model";
import config from "../../../config";

const CryptoSchedule = async () => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?x_cg_demo_api_key=${config.key}`,
      {
        params: {
          ids: "bitcoin,matic-network,ethereum",
          vs_currencies: "usd",
          include_market_cap: true,
          include_24hr_change: true,
        },
      }
    );
    const data = response.data;
    for (const coinId in data) {
      const coinData = data[coinId];
      await Crypto.create({
        coin: coinId,
        price: coinData.usd,
        market_cap: coinData.usd_market_cap,
        change_24h: coinData.usd_24h_change,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const CryptoService = {
  CryptoSchedule,
};

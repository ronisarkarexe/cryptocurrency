import { Request, Response } from "express";
import { CryptocurrencyService } from "./cryptocurrency.service";

const getStats = async (req: Request, res: Response) => {
  try {
    const { coin } = req.query;
    const result = await CryptocurrencyService.getStats(coin as string);
    res.status(200).json({
      message: "Coin get successfully!",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

const getDeviation = async (req: Request, res: Response) => {
  try {
    const { coin } = req.query;
    const result = await CryptocurrencyService.getDeviation(coin as string);
    res.status(200).json({
      message: "Deviation get successfully!",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const CryptocurrencyController = {
  getStats,
  getDeviation,
};

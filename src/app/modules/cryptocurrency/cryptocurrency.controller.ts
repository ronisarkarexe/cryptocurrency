import { Request, Response } from "express";
import { StatsService } from "./cryptocurrency.service";

const getStats = async (req: Request, res: Response) => {
  try {
    const result = await StatsService.getStats(req.body);
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

export const StatsController = {
  getStats,
};

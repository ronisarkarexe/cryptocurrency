import mongoose from "mongoose";
import { app } from "./app";
import config from "./config";
import cron from "node-cron";
import { CryptoService } from "./app/modules/crypto/crypto.service";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
    cron.schedule("0 */2 * * *", () => {
      console.log("Running the scheduled task...");
      CryptoService.CryptoSchedule();
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

main();

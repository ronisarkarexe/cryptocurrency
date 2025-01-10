import express from "express";
import { StatsRouter } from "../app/modules/cryptocurrency/cryptocurrency.router";
const router = express.Router();

const modules = [
  {
    path: "/cryptocurrency",
    router: StatsRouter,
  },
];

modules.forEach((route) => router.use(route.path, route.router));

export const Routers = router;

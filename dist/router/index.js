"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const express_1 = __importDefault(require("express"));
const cryptocurrency_router_1 = require("../app/modules/cryptocurrency/cryptocurrency.router");
const router = express_1.default.Router();
const modules = [
    {
        path: "/cryptocurrency",
        router: cryptocurrency_router_1.StatsRouter,
    },
];
modules.forEach((route) => router.use(route.path, route.router));
exports.Routers = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const login_controller_1 = __importDefault(require("../controllers/login/login.controller"));
const routes = (0, express_1.Router)();
const loginRouter = () => {
    routes.post("/", login_controller_1.default);
    return routes;
};
exports.loginRouter = loginRouter;
//# sourceMappingURL=login.routes.js.map
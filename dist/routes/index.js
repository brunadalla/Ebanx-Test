"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const express_1 = require("express");
const reset_controller_1 = __importDefault(require("../controllers/reset.controller"));
const account_controller_1 = __importDefault(require("../controllers/account.controller"));
const event_controller_1 = __importDefault(require("../controllers/event.controller"));
const routes = (0, express_1.Router)();
const appRoutes = (app) => {
    app.use("/reset", routes.post("/", reset_controller_1.default));
    app.use("/balance", routes.get(":account_id", account_controller_1.default));
    app.use("/events", routes.post("/", event_controller_1.default));
};
exports.appRoutes = appRoutes;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
require("reflect-metadata");
const routes_1 = require("./routes");
const handleError_middleware_1 = __importDefault(require("./middlewares/handleError.middleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*'
}));
(0, routes_1.appRoutes)(app);
app.use(handleError_middleware_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
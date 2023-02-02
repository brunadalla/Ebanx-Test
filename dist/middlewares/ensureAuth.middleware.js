"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const ensureAuthMiddleware = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Invalid Token",
        });
    }
    token = token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: "Invalid Token",
            });
        }
        req.user = {
            id: decoded.sub,
        };
    });
    return next();
};
exports.default = ensureAuthMiddleware;

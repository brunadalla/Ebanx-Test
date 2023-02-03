"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const createUser_controller_1 = __importDefault(require("../controllers/users/createUser.controller"));
const deleteUser_controller_1 = __importDefault(require("../controllers/users/deleteUser.controller"));
const listOneUser_controller_1 = __importDefault(require("../controllers/users/listOneUser.controller"));
const listUsers_controller_1 = __importDefault(require("../controllers/users/listUsers.controller"));
const updateUser_controller_1 = __importDefault(require("../controllers/users/updateUser.controller"));
const ensureAuth_middleware_1 = __importDefault(require("../middlewares/ensureAuth.middleware"));
const routes = (0, express_1.Router)();
const usersRouter = () => {
    routes.post("/", createUser_controller_1.default);
    routes.get("/", ensureAuth_middleware_1.default, listUsers_controller_1.default);
    routes.get("/:id", ensureAuth_middleware_1.default, listOneUser_controller_1.default);
    routes.patch("/:id", ensureAuth_middleware_1.default, updateUser_controller_1.default);
    routes.delete("/:id", ensureAuth_middleware_1.default, deleteUser_controller_1.default);
    return routes;
};
exports.usersRouter = usersRouter;
//# sourceMappingURL=users.routes.js.map
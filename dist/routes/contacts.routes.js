"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsRouter = void 0;
const express_1 = require("express");
const createContact_controller_1 = __importDefault(require("../controllers/contacts/createContact.controller"));
const deleteContact_controller_1 = __importDefault(require("../controllers/contacts/deleteContact.controller"));
const listContactsByUser_controller_1 = __importDefault(require("../controllers/contacts/listContactsByUser.controller"));
const listOneContact_controller_1 = __importDefault(require("../controllers/contacts/listOneContact.controller"));
const updateContact_controller_1 = __importDefault(require("../controllers/contacts/updateContact.controller"));
const ensureAuth_middleware_1 = __importDefault(require("../middlewares/ensureAuth.middleware"));
const routes = (0, express_1.Router)();
const contactsRouter = () => {
    routes.post("/", ensureAuth_middleware_1.default, createContact_controller_1.default);
    routes.get("/", ensureAuth_middleware_1.default, listContactsByUser_controller_1.default);
    routes.get("/:id", ensureAuth_middleware_1.default, listOneContact_controller_1.default);
    routes.patch("/:id", ensureAuth_middleware_1.default, updateContact_controller_1.default);
    routes.delete("/:id", ensureAuth_middleware_1.default, deleteContact_controller_1.default);
    return routes;
};
exports.contactsRouter = contactsRouter;
//# sourceMappingURL=contacts.routes.js.map
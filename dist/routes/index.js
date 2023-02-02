"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const users_routes_1 = require("./users.routes");
const login_routes_1 = require("./login.routes");
const contacts_routes_1 = require("./contacts.routes");
const appRoutes = (app) => {
    app.use("/users", (0, users_routes_1.usersRouter)());
    app.use("/login", (0, login_routes_1.loginRouter)());
    app.use("/contacts", (0, contacts_routes_1.contactsRouter)());
};
exports.appRoutes = appRoutes;

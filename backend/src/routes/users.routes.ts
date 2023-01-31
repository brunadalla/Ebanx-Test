import { Router } from "express"

import createUserController from "../controllers/users/createUser.controller"
import deleteUserController from "../controllers/users/deleteUser.controller"
import listOneUserController from "../controllers/users/listOneUser.controller"
import listUserController from "../controllers/contacts/listContactsByUser.controller"
import updateUserController from "../controllers/users/updateUser.controller"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"

const routes = Router()

export const usersRouter = () => {
  routes.post("/", createUserController)
  routes.get("/", ensureAuthMiddleware, listUserController)
  routes.get("/:id", ensureAuthMiddleware, listOneUserController)
  routes.patch("/:id", ensureAuthMiddleware, updateUserController)
  routes.delete("/:id", ensureAuthMiddleware, deleteUserController)

  return routes
}

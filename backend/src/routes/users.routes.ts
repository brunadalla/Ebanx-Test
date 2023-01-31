import { Router } from "express"
import createUserController from "../controllers/users/createUser.controller"
import listUserController from "../controllers/users/listUsers.controller"

const routes = Router()

export const usersRouter = () => {
  routes.post("/", createUserController)
  routes.get("/", listUserController)
  routes.get("/:id", )
  routes.patch("/:id")
  routes.delete("/:id")

  return routes
}

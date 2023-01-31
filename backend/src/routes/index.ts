import { Express } from "express"
import { usersRouter } from "./users.routes"
import { loginRouter } from "./login.routes"

export const appRoutes = (app: Express) => {
  app.use("/users", usersRouter())
  app.use("/login", loginRouter())
}

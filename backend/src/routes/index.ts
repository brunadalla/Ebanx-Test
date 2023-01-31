import { Express } from "express"
import { usersRouter } from "./users.routes"

export const appRoutes = (app: Express) => {
  app.use("/users", usersRouter())
}

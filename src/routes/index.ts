import { Express } from "express"
import resetController from "../controllers/reset.controller"
import getAccountsBalanceController from "../controllers/account.controller"
import eventController from "../controllers/event.controller"

export const appRoutes = (app: Express) => {
  app.get("/balance", getAccountsBalanceController)
  app.post("/reset", resetController)
  app.post("/event", eventController)
}

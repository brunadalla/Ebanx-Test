import { Request, Response } from "express"
import resetService from "../services/reset.service"

const resetController = async (req: Request, res: Response) => {
  await resetService()
  return res.status(200).send()
}

export default resetController
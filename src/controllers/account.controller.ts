import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"
import getAccountsBalanceService from "../services/account.service"

const getAccountsBalanceController = async (req: Request, res: Response) => {
  const id = req.query.account_id as string

  try {
    const balance = await getAccountsBalanceService(id)
    return res.status(200).json(instanceToPlain(balance))
  } catch (error: any) {
     if (error.statusCode === 404) {
      return res.status(404).json(0)
    }
  }
}

export default getAccountsBalanceController

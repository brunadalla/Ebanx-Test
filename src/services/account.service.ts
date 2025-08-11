import dataSource from "../data-source"
import { Account } from "../entities/account.entity"
import { AppError } from "../errors/appError"

const getAccountsBalanceService = async (
  account_id: string
): Promise<number> => {
  const repository = dataSource.getRepository(Account)
  const account = await repository.findOneBy({ id: account_id })

  if (!account) {
    throw new AppError("Account not found.", 404)
  }

  return account.balance
}

export default getAccountsBalanceService

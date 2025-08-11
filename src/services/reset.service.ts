import dataSource from "../data-source"
import { Account } from "../entities/account.entity"
import { AppError } from "../errors/appError"

const resetService = async (): Promise<void> => {
  try {
    const repository = dataSource.getRepository(Account)
    await repository.clear()
  } catch (error) {
    throw new AppError("Failed to reset accounts.", 500)
  }
}

export default resetService

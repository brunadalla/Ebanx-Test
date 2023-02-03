import dataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

const listOneUserService = async (id: string): Promise<User> => {
  const userRepository = dataSource.getRepository(User)
  const user = await userRepository.findOneBy({ id })

  if (!user) {
    throw new AppError("User not found", 404)
  }

  return user
}

export default listOneUserService

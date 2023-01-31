import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

const deleteUserService = async (id: string): Promise<Array<string | number>> => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id })
  
  if (!user) {
    throw new AppError("User not found", 404)
  }

  await userRepository.delete(id)

  return ['User is now inactive', 204]
}

export default deleteUserService
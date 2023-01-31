import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

const listOneUserService = async (
  idUser: string,
  idToList: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({ id: idToList })

  if (!user) {
    throw new AppError("User not found", 404)
  } else if (idUser !== idToList) {
    throw new AppError("Unauthorized access", 401)
  }

  return user
}

export default listOneUserService

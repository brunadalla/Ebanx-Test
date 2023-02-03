import dataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

const deleteUserService = async (
  idUser: string,
  idToDelete: string
): Promise<void> => {
  const userRepository = dataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id: idToDelete })

  if (!user) {
    throw new AppError("User not found", 404)
  } else if (idUser !== idToDelete) {
    throw new AppError("Unauthorized access", 401)
  }

  await userRepository.delete(idToDelete)
}

export default deleteUserService

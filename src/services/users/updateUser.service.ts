import { hash } from "bcrypt"

import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import dataSource from "../../data-source"
import { IUserUpdate } from "../../interfaces/user"

const updateUserService = async (
  data: IUserUpdate,
  idUser: string,
  idToUpdate: string
): Promise<User> => {
  const userRepository = dataSource.getRepository(User)

  const userToUpdate = await userRepository.findOne({
    where: {
      id: idToUpdate,
    },
  })

  if (!userToUpdate) {
    throw new AppError("User not found", 404)
  } else if (idUser !== idToUpdate) {
    throw new AppError("Unauthorized access", 401)
  } else if (
    Object.keys(data).includes("id") ||
    Object.keys(data).includes("email")
  ) {
    throw new AppError(
      "You can not change the user's attributes: id and/or email",
      401
    )
  }

  await userRepository.update(idToUpdate, {
    ...userToUpdate,
    ...data,
    password: data.password
      ? await hash(data.password, 10)
      : userToUpdate.password,
  })

  const updatedUser = await userRepository.findOne({
    where: {
      id: idToUpdate,
    },
  })

  return updatedUser!
}

export default updateUserService

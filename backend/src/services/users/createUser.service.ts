import { hash } from "bcrypt"

import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserCreate } from "../../interfaces/user"
import { AppError } from "../../errors/appError"

const createUserService = async ({
  name,
  email,
  password,
  phone,
}: IUserCreate): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User)
  const emailAlreadyExists = await userRepository.findOne({
    where: {
      email: email,
    },
  })

  if (emailAlreadyExists) {
    throw new AppError("Email already being used", 400)
  }

  const hashedPassword = await hash(password, 10)

  const newUser = userRepository.create({
    name,
    email,
    phone,
    password: hashedPassword,
  })

  await userRepository.save(newUser)

  return newUser
}

export default createUserService

import { hash } from "bcrypt"

import { User } from "../../entities/user.entity"
import { IUserCreate } from "../../interfaces/user"
import { AppError } from "../../errors/appError"
import dataSource from "../../data-source"

const createUserService = async ({
  name,
  email,
  password,
  phone,
}: IUserCreate): Promise<User> => {
  const userRepository = dataSource.getRepository(User)
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

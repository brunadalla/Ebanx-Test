import { compare } from "bcrypt"
import jwt from "jsonwebtoken"

import "dotenv/config"

import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { AppDataSource } from "../../data-source"
import { IUserLogin } from "../../interfaces/user"

const loginService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      email: email,
    },
  })

  if (!user) {
    throw new AppError("Invalid email or password", 403)
  }

  const passwordMatch = await compare(password, user.password)

  if (!passwordMatch) {
    throw new AppError("Invalid email or password", 403)
  }

  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
    subject: user.id,
  })

  return token
}

export default loginService

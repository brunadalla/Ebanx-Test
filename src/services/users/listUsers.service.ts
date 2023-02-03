import dataSource from "../../data-source"
import { User } from "../../entities/user.entity"

const listUsersService = async (): Promise<User[]> => {
  const userRepository = dataSource.getRepository(User)

  const users = await userRepository.find()

  return users
}

export default listUsersService
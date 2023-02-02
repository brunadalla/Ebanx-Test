import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"

const listContactsByUserService = async (
  id: string
): Promise<Contact[]> => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      id,
    },
    relations: {
      contacts: true,
    },
  })

  return user?.contacts!
}

export default listContactsByUserService

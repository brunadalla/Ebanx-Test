import dataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

const listOneContactService = async (
  idUser: string,
  idContact: string
): Promise<Contact> => {
  const userRepository = dataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      id: idUser,
    },
    relations: {
      contacts: true,
    },
  })

  const contact = user?.contacts.find(contact => contact.id === idContact)

  if (!contact) {
    throw new AppError("Contact not found", 404)
  }

  return contact
}

export default listOneContactService

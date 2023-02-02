import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IContactUpdate } from "../../interfaces/contact"

const updateContactService = async (
  data: IContactUpdate,
  idUser: string,
  idContact: string
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact)
  const userRepository = AppDataSource.getRepository(User)

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

  await contactRepository.update(idContact, {
    ...contact,
    name: data.name ? data.name : contact.name,
    email: data.email ? data.email : contact.email,
    phone: data.phone ? data.phone : contact.phone,
  })

  const updatedContact = await contactRepository.findOneBy({ id: idContact })

  return updatedContact!
}

export default updateContactService

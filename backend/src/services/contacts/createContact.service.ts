import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IContactRequest } from "../../interfaces/contact"

const createContactService = async ({
  name,
  email,
  phone,
  userId
}: IContactRequest): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact)
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  })

  const emailAlreadyExists = user?.contacts.find(contact => contact.email === email)
  const phoneAlreadyExists = user?.contacts.find(contact => contact.phone === phone)

  if (emailAlreadyExists) {
    throw new AppError(`Your contact ${emailAlreadyExists.name} already has this email`, 400)
  } else if (phoneAlreadyExists) {
    throw new AppError(`Your contact ${phoneAlreadyExists.name} already has this phone number`, 400)
  }

  const newContact = contactRepository.create({
    name,
    email,
    phone,
    user: user!
  })

  await contactRepository.save(newContact)

  return newContact
}

export default createContactService

import dataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IContactRequest } from "../../interfaces/contact"

const createContactService = async ({
  name,
  email,
  phone,
  userId,
}: IContactRequest): Promise<Contact> => {
  const contactRepository = dataSource.getRepository(Contact)
  const userRepository = dataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id: userId })
  const contacts = await contactRepository.find({ relations: { user: true } })
  const userContacts = contacts.filter((contact) => contact.user.id === userId)

  const emailAlreadyExists = userContacts.find(
    (contact) => contact.email === email
  )
  const phoneAlreadyExists = userContacts.find(
    (contact) => contact.phone === phone
  )

  if (emailAlreadyExists) {
    throw new AppError(
      `Your contact ${emailAlreadyExists.name} already has this email`,
      400
    )
  } else if (phoneAlreadyExists) {
    throw new AppError(
      `Your contact ${phoneAlreadyExists.name} already has this phone number`,
      400
    )
  }

  const newContact = contactRepository.create({
    name,
    email,
    phone,
    user: user!,
  })

  await contactRepository.save(newContact)

  return newContact
}

export default createContactService

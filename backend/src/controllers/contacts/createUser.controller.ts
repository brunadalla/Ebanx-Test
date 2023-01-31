import { Request, Response } from "express"
import createContactService from "../../services/contacts/createContact.service"

const createContactController = async (req: Request, res: Response) => {
  const id = req.user.id
  const data = {...req.body, userId: id}
  const contact = await createContactService(data)

  return res.status(201).json(contact)
}

export default createContactController

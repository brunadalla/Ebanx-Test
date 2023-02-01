import { Request, Response } from "express"
import createContactService from "../../services/contacts/createContact.service"
import { instanceToPlain } from "class-transformer"

const createContactController = async (req: Request, res: Response) => {
  const id = req.user.id
  const data = {...req.body, userId: id}
  const contact = await createContactService(data)

  return res.status(201).json(instanceToPlain(contact))
}

export default createContactController

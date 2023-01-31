import { Request, Response } from "express"
import listOneContactService from "../../services/contacts/listOneContact.service"

const listOneContactController = async (req: Request, res: Response) => {
  const userId = req.user.id
  const idContact = req.params.id
  const contact = await listOneContactService(userId, idContact)

  return res.json(contact)
}

export default listOneContactController
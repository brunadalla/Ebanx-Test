import { Request, Response } from "express"
import updateContactService from "../../services/contacts/updateContactservice"


const updateContactController = async (req: Request, res: Response) => {
  const data = req.body
  const userId = req.user.id
  const idContact = req.params.id

  const contact = await updateContactService(data, userId, idContact)

  return res.json(contact)
}

export default updateContactController
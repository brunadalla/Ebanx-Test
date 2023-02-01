import { Request, Response } from "express"
import deleteContactService from "../../services/contacts/deleteContact.service"

const deleteContactController = async (req: Request, res: Response) => {
  const idUser = req.user.id
  const idContact = req.params.id
  await deleteContactService(idUser, idContact)

  return res.status(204).send()
}

export default deleteContactController

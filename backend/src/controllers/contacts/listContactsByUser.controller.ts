import { Request, Response } from "express"
import listContactsByUserService from "../../services/contacts/listContactsByUser.service"

const listContactsByUserController = async (req: Request, res: Response) => {
  const id = req.user.id
  const contacts = await listContactsByUserService(id)

  return res.json(contacts)
}

export default listContactsByUserController

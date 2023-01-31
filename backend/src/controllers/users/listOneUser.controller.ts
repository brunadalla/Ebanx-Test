import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import listOneUserService from "../../services/users/listOneUser.service"

const listOneUserController = async (req: Request, res: Response) => {
  const idUser = req.user.id
  const idToList = req.params.id
  const user = await listOneUserService(idUser, idToList)

  return res.json(instanceToPlain(user))
}

export default listOneUserController
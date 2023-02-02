import { Request, Response } from "express"
import deleteUserService from "../../services/users/deleteUser.service"

const deleteUserController = async (req: Request, res: Response) => {
  const idUser = req.user.id
  const idToDelete = req.params.id
  await deleteUserService(idUser, idToDelete)

  return res.status(204).send()
}

export default deleteUserController

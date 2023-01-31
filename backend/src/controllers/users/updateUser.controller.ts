import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import updateUserService from "../../services/users/updateUser.service"

const updateUserController = async (req: Request, res: Response) => {
  const data = req.body
  const userId = req.user.id
  const idToUpdate = req.params.id

  const updatedUser = await updateUserService(data, userId, idToUpdate)

  return res.json(instanceToPlain(updatedUser))
}

export default updateUserController
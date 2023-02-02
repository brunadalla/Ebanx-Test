import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"
import createUserService from "../../services/users/createUser.service"

const createUserController = async (req: Request, res: Response) => {
  const data = req.body
  const createdUser = await createUserService(data)

  return res.status(201).json(instanceToPlain(createdUser))
}

export default createUserController

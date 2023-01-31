import { Request, Response } from "express"
import listUsersService from "../../services/users/listUsers.service"

const listUserController = (req: Request, res: Response) => {
  try {
    const users = listUsersService()
    return res.send(users)
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      })
    }
  }
}

export default listUserController

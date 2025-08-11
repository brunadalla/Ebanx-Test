import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import eventService from "../services/event.service"

const eventController = async (req: Request, res: Response) => {
  const data = req.body

  try {
    const result = await eventService(data)
    return res.status(201).json(instanceToPlain(result))
  } catch (error: any) {
    if (error.statusCode === 404) {
      return res.status(404).json(0)
    }
  }
}

export default eventController

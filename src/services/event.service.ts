import dataSource from "../data-source"
import { Account } from "../entities/account.entity"
import { AppError } from "../errors/appError"
import {
  EventPayload,
  IDepositEvent,
  ITransferEvent,
  IWithdrawEvent,
} from "../interfaces/event.interface"

const depositService = async (event: IDepositEvent) => {
  const repository = dataSource.getRepository(Account)

  // Converter id para number ao criar nova conta
  let account = await repository.findOneBy({ id: event.destination })

  if (!account) {
    account = repository.create({
      id: event.destination,
      balance: event.amount,
    })
  } else {
    account.balance += event.amount
  }

  await repository.save(account)

  return { destination: account }
}

const withdrawService = async (event: IWithdrawEvent) => {
  const repository = dataSource.getRepository(Account)
  const account = await repository.findOneBy({ id: event.origin })

  if (!account) {
    throw new AppError("Account not found", 404)
  }

  if (account.balance < event.amount) {
    throw new AppError("Insufficient balance", 400)
  }

  account.balance = account.balance - event.amount

  await repository.save(account)

  return { origin: account }
}

const transferService = async (event: ITransferEvent) => {
  const repository = dataSource.getRepository(Account)
  const originAccount = await repository.findOneBy({ id: event.origin })

  if (!originAccount) {
   throw new AppError("Origin account not found", 404)
  }

  if (originAccount.balance < event.amount) {
    throw new AppError("Insufficient balance", 400)
  }

  let destinationAccount = await repository.findOneBy({
    id: event.destination,
  })

  if (!destinationAccount) {
    destinationAccount = repository.create({
      id: event.destination,
      balance: 0,
    })
  }

  originAccount.balance -= event.amount
  destinationAccount.balance += event.amount

  await repository.save(originAccount)
  await repository.save(destinationAccount)

  return {
    origin: originAccount,
    destination: destinationAccount,
  }
}

const eventService = async (event: EventPayload) => {
  switch (event.type) {
    case "deposit": {
      return await depositService(event as IDepositEvent)
    }
    case "withdraw": {
      return await withdrawService(event as IWithdrawEvent)
    }
    case "transfer": {
      return await transferService(event as ITransferEvent)
    }

    default:
      throw new AppError("Invalid event type", 400)
  }
}

export default eventService

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../data-source"));
const account_entity_1 = require("../entities/account.entity");
const appError_1 = require("../errors/appError");
const depositService = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const repository = data_source_1.default.getRepository(account_entity_1.Account);
    let account = yield repository.findOneBy({ id: event.destination });
    if (!account) {
        account = repository.create({
            id: event.destination,
            balance: event.amount,
        });
    }
    else {
        account.balance += event.amount;
    }
    yield repository.save(account);
    return { destination: account };
});
const withdrawService = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const repository = data_source_1.default.getRepository(account_entity_1.Account);
    const account = yield repository.findOneBy({ id: event.origin });
    if (!account) {
        throw new appError_1.AppError("Account not found", 404);
    }
    if (account.balance < event.amount) {
        throw new appError_1.AppError("Insufficient balance", 400);
    }
    account.balance = account.balance - event.amount;
    yield repository.save(account);
    return { origin: account };
});
const transferService = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const repository = data_source_1.default.getRepository(account_entity_1.Account);
    const originAccount = yield repository.findOneBy({ id: event.origin });
    if (!originAccount) {
        throw new appError_1.AppError("Origin account not found", 404);
    }
    if (originAccount.balance < event.amount) {
        throw new appError_1.AppError("Insufficient balance", 400);
    }
    let destinationAccount = yield repository.findOneBy({
        id: event.destination,
    });
    if (!destinationAccount) {
        destinationAccount = repository.create({
            id: event.destination,
            balance: 0,
        });
    }
    originAccount.balance -= event.amount;
    destinationAccount.balance += event.amount;
    yield repository.save(originAccount);
    yield repository.save(destinationAccount);
    return {
        origin: originAccount,
        destination: destinationAccount,
    };
});
const eventService = (event) => __awaiter(void 0, void 0, void 0, function* () {
    switch (event.type) {
        case "deposit": {
            return yield depositService(event);
        }
        case "withdraw": {
            return yield withdrawService(event);
        }
        case "transfer": {
            return yield transferService(event);
        }
        default:
            throw new appError_1.AppError("Invalid event type", 400);
    }
});
exports.default = eventService;
//# sourceMappingURL=event.service.js.map
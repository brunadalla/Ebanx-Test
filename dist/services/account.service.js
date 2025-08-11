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
const getAccountsBalanceService = (account_id) => __awaiter(void 0, void 0, void 0, function* () {
    const repository = data_source_1.default.getRepository(account_entity_1.Account);
    const account = yield repository.findOneBy({ id: account_id });
    if (!account) {
        throw new appError_1.AppError("Account not found.", 404);
    }
    return account.balance;
});
exports.default = getAccountsBalanceService;
//# sourceMappingURL=account.service.js.map
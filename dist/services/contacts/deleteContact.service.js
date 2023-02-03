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
const data_source_1 = __importDefault(require("../../data-source"));
const contact_entity_1 = require("../../entities/contact.entity");
const user_entity_1 = require("../../entities/user.entity");
const appError_1 = require("../../errors/appError");
const deleteContactService = (idUser, idContact) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.default.getRepository(contact_entity_1.Contact);
    const userRepository = data_source_1.default.getRepository(user_entity_1.User);
    const user = yield userRepository.findOne({
        where: {
            id: idUser,
        },
        relations: {
            contacts: true,
        },
    });
    const contact = user === null || user === void 0 ? void 0 : user.contacts.find(contact => contact.id === idContact);
    if (!contact) {
        throw new appError_1.AppError("Contact not found", 404);
    }
    yield contactRepository.delete(idContact);
});
exports.default = deleteContactService;
//# sourceMappingURL=deleteContact.service.js.map
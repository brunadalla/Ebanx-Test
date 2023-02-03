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
const createContactService = ({ name, email, phone, userId, }) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.default.getRepository(contact_entity_1.Contact);
    const userRepository = data_source_1.default.getRepository(user_entity_1.User);
    const user = yield userRepository.findOneBy({ id: userId });
    const contacts = yield contactRepository.find({ relations: { user: true } });
    const userContacts = contacts.filter((contact) => contact.user.id === userId);
    const emailAlreadyExists = userContacts.find((contact) => contact.email === email);
    const phoneAlreadyExists = userContacts.find((contact) => contact.phone === phone);
    if (emailAlreadyExists) {
        throw new appError_1.AppError(`Your contact ${emailAlreadyExists.name} already has this email`, 400);
    }
    else if (phoneAlreadyExists) {
        throw new appError_1.AppError(`Your contact ${phoneAlreadyExists.name} already has this phone number`, 400);
    }
    const newContact = contactRepository.create({
        name,
        email,
        phone,
        user: user,
    });
    yield contactRepository.save(newContact);
    return newContact;
});
exports.default = createContactService;
//# sourceMappingURL=createContact.service.js.map
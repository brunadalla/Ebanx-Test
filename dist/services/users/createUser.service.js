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
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const data_source_1 = require("../../data-source");
const user_entity_1 = require("../../entities/user.entity");
const appError_1 = require("../../errors/appError");
const createUserService = ({ name, email, password, phone, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const emailAlreadyExists = yield userRepository.findOne({
        where: {
            email: email,
        },
    });
    if (emailAlreadyExists) {
        throw new appError_1.AppError("Email already being used", 400);
    }
    const hashedPassword = yield (0, bcrypt_1.hash)(password, 10);
    const newUser = userRepository.create({
        name,
        email,
        phone,
        password: hashedPassword,
    });
    yield userRepository.save(newUser);
    return newUser;
});
exports.default = createUserService;

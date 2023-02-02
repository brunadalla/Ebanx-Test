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
const user_entity_1 = require("../../entities/user.entity");
const appError_1 = require("../../errors/appError");
const data_source_1 = require("../../data-source");
const updateUserService = (data, idUser, idToUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const userToUpdate = yield userRepository.findOne({
        where: {
            id: idToUpdate,
        },
    });
    if (!userToUpdate) {
        throw new appError_1.AppError("User not found", 404);
    }
    else if (idUser !== idToUpdate) {
        throw new appError_1.AppError("Unauthorized access", 401);
    }
    else if (Object.keys(data).includes("id") ||
        Object.keys(data).includes("email")) {
        throw new appError_1.AppError("You can not change the user's attributes: id and/or email", 401);
    }
    yield userRepository.update(idToUpdate, Object.assign(Object.assign(Object.assign({}, userToUpdate), data), { password: data.password
            ? yield (0, bcrypt_1.hash)(data.password, 10)
            : userToUpdate.password }));
    const updatedUser = yield userRepository.findOne({
        where: {
            id: idToUpdate,
        },
    });
    return updatedUser;
});
exports.default = updateUserService;

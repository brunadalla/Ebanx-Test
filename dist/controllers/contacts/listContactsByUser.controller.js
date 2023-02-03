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
const listContactsByUser_service_1 = __importDefault(require("../../services/contacts/listContactsByUser.service"));
const listContactsByUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.user.id;
    const contacts = yield (0, listContactsByUser_service_1.default)(id);
    return res.json(contacts);
});
exports.default = listContactsByUserController;
//# sourceMappingURL=listContactsByUser.controller.js.map
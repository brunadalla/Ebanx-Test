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
const deleteContact_service_1 = __importDefault(require("../../services/contacts/deleteContact.service"));
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idUser = req.user.id;
    const idContact = req.params.id;
    yield (0, deleteContact_service_1.default)(idUser, idContact);
    return res.status(204).send();
});
exports.default = deleteContactController;
//# sourceMappingURL=deleteContact.controller.js.map
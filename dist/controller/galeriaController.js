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
const galeriaService_1 = require("../services/galeriaService");
class GaleriaController {
    constructor() {
        this._service = new galeriaService_1.GaleriaService();
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = req.params.page ? parseInt(req.params.page) : 1;
                const qtd = req.params.qtd ? parseInt(req.params.qtd) : 10;
                let result = yield this._service.getAll(page, qtd);
                res.status(200).json({ result });
            }
            catch (error) {
                res.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                let result = yield this._service.get(_id);
                res.status(200).json({ result });
            }
            catch (error) {
                res.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
}
exports.default = new GaleriaController();

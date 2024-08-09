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
exports.presupuestoController = void 0;
const database_1 = __importDefault(require("../database"));
class PresupuestoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUser } = req.params;
            try {
                const presupuestos = yield database_1.default.query('SELECT * FROM Presupuesto WHERE IdUsuario = ?', [idUser]);
                res.json({ presupuestos });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al obtener los presupuestos' });
            }
        });
    }
    getPresupuesto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUser } = req.params;
            try {
                const [presupuesto] = yield database_1.default.query('SELECT * FROM Presupuesto WHERE IdUsuario = ?', [idUser]);
                console.log('Presupuesto:', presupuesto);
                if (presupuesto.length > 0) {
                    res.json(presupuesto[0]);
                }
                else {
                    res.status(404).json({ error: 'Presupuesto no encontrado' });
                }
            }
            catch (err) {
                res.status(500).json({ error: 'Error al obtener el presupuesto' });
            }
        });
    }
}
exports.presupuestoController = new PresupuestoController();
exports.default = exports.presupuestoController;

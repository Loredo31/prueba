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
exports.gastoController = void 0;
const database_1 = __importDefault(require("../database"));
class GastoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gastos = yield database_1.default.query('SELECT * FROM Gasto');
                res.json({ gastos });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al obtener los gastos' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO Gasto SET ?', [req.body]);
                res.json({ message: 'Gasto guardado' });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al crear el gasto' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield database_1.default.query('DELETE FROM Gasto WHERE IdGasto = ?', [id]);
                res.json({ message: 'El gasto fue eliminado' });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al eliminar el gasto' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield database_1.default.query('UPDATE Gasto SET ? WHERE IdGasto = ?', [req.body, id]);
                res.json({ message: 'El gasto fue actualizado' });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al actualizar el gasto' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const gasto = yield database_1.default.query('SELECT * FROM Gasto WHERE id = ?', [id]);
                if (gasto.length > 0) {
                    res.json(gasto[0]);
                }
                else {
                    res.status(404).json({ text: 'El gasto no existe' });
                }
            }
            catch (err) {
                res.status(500).json({ error: 'Error al obtener el gasto' });
            }
        });
    }
}
exports.gastoController = new GastoController();
exports.default = exports.gastoController;

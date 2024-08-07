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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingresoController = void 0;
const database_1 = __importDefault(require("../database"));
class IngresoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ingresos = yield database_1.default.query('SELECT * FROM Ingreso');
                res.json({ ingresos });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al obtener los ingresos' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO Ingreso SET ?', [req.body]);
                res.json({ message: 'Ingreso guardado' });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al crear el ingreso' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield database_1.default.query('DELETE FROM Ingreso WHERE IdIngreso = ?', [id]);
                res.json({ message: 'El ingreso fue eliminado' });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al eliminar el ingreso' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { userId } = _a, gastoData = __rest(_a, ["userId"]);
            try {
                yield database_1.default.query('UPDATE Ingreso SET ? WHERE IdIngreso = ? AND IdUsuario = ?', [gastoData, id, userId]);
                res.json({ message: 'El ingreso fue actualizado' });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al actualizar el ingreso' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const ingreso = yield database_1.default.query('SELECT * FROM Ingreso WHERE id = ?', [id]);
                if (ingreso.length > 0) {
                    res.json(ingreso[0]);
                }
                else {
                    res.status(404).json({ text: 'El ingreso no existe' });
                }
            }
            catch (err) {
                res.status(500).json({ error: 'Error al obtener el ingreso' });
            }
        });
    }
}
exports.ingresoController = new IngresoController();
exports.default = exports.ingresoController;

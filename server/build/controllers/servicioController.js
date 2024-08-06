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
exports.servicioController = void 0;
const database_1 = __importDefault(require("../database"));
class ServicioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const servicios = yield database_1.default.query('SELECT * FROM Servicio');
                res.json({ servicios });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al obtener los servicios' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO Servicio SET ?', [req.body]);
                res.json({ message: 'Servicio guardado' });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al crear el servicio' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield database_1.default.query('DELETE FROM Servicio WHERE IdServicio = ?', [id]);
                res.json({ message: 'El servicio fue eliminado' });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al eliminar el servicio' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield database_1.default.query('UPDATE Servicio SET ? WHERE IdServicio = ?', [req.body, id]);
                res.json({ message: 'El servicio fue actualizado' });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al actualizar el servicio' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const servicio = yield database_1.default.query('SELECT * FROM Servicio WHERE id = ?', [id]);
                if (servicio.length > 0) {
                    res.json(servicio[0]);
                }
                else {
                    res.status(404).json({ text: 'El servicio no existe' });
                }
            }
            catch (err) {
                res.status(500).json({ error: 'Error al obtener el servicio' });
            }
        });
    }
}
exports.servicioController = new ServicioController();
exports.default = exports.servicioController;

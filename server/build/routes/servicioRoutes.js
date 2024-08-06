"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const servicioController_1 = require("./../controllers/servicioController");
const express_1 = require("express");
class ServicioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', servicioController_1.servicioController.list);
        this.router.post('/', servicioController_1.servicioController.create);
        this.router.delete('/:id', servicioController_1.servicioController.delete);
        this.router.put('/:id', servicioController_1.servicioController.update);
        this.router.get('/:id', servicioController_1.servicioController.getOne);
    }
}
const servicioRoutes = new ServicioRoutes();
exports.default = servicioRoutes.router;

import { Router } from "express";
import usuarioController from "../controllers/usuarioController";

class UsuarioRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',usuarioController.list);
        this.router.post('/',usuarioController.create);
        this.router.delete('/:id',usuarioController.delete);
        this.router.put('/:id',usuarioController.update);
        this.router.get('/:id', usuarioController.getOne);
    }
}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;
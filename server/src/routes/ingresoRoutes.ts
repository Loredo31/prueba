import { Router } from 'express';
import ingresoController from '../controllers/ingresoController';

class IngresoRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', ingresoController.list);
    this.router.post('/', ingresoController.create);
    this.router.delete('/:id', ingresoController.delete);
    this.router.put('/:id', ingresoController.update);
    this.router.get('/:id', ingresoController.getOne);
  }
}

const ingresoRoutes = new IngresoRoutes();
export default ingresoRoutes.router;

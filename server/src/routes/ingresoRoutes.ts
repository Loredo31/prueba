import { Router } from 'express';
import ingresoController from '../controllers/ingresoController';

class IngresoRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/:userId', ingresoController.list);
    this.router.post('/:userId', ingresoController.create);
    this.router.delete('/:userId/:id', ingresoController.delete);
    this.router.put('/:userId/:id', ingresoController.update);
    this.router.get('/:userId/:id', ingresoController.getOne);
  }
}

const ingresoRoutes = new IngresoRoutes();
export default ingresoRoutes.router;

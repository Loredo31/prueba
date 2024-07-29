import { Router } from 'express';
import gastoController from '../controllers/gastoController';

class GastoRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', gastoController.list);
    this.router.post('/', gastoController.create);
    this.router.delete('/:id', gastoController.delete);
    this.router.put('/:id', gastoController.update);
    this.router.get('/:id', gastoController.getOne);
  }
}

const gastoRoutes = new GastoRoutes();
export default gastoRoutes.router;

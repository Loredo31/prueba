import { Router } from 'express';
import gastoController from '../controllers/gastoController';

class GastoRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/:userId', gastoController.list);
    this.router.post('/:userId', gastoController.create);
    this.router.delete('/:userId/:id', gastoController.delete);
    this.router.put('/:userId/:id', gastoController.update);
    this.router.get('/:userId/:id', gastoController.getOne);
  }
}

const gastoRoutes = new GastoRoutes();
export default gastoRoutes.router;

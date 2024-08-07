import { servicioController } from './../controllers/servicioController';
import { Router } from 'express';

class ServicioRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/:userId', servicioController.list);
    this.router.post('/:userId', servicioController.create);
    this.router.delete('/:userId/:id', servicioController.delete);
    this.router.put('/:userId/:id', servicioController.update);
    this.router.get('/:userId/:id', servicioController.getOne);
  }
}

const servicioRoutes = new ServicioRoutes();
export default servicioRoutes.router;

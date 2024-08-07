import { servicioController } from './../controllers/servicioController';
import { Router } from 'express';

class ServicioRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', servicioController.list);
    this.router.post('/', servicioController.create);
    this.router.delete('/:id', servicioController.delete);
    this.router.put('/:id', servicioController.update);
    this.router.get('/:id', servicioController.getOne);
  }
}

const servicioRoutes = new ServicioRoutes();
export default servicioRoutes.router;

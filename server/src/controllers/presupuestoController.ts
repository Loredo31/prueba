import { Request, Response } from 'express';
import pool from '../database';

class PresupuestoController {
  public async list(req: Request, res: Response): Promise<void> {
    const { idUser } = req.params;
    try {
      const presupuestos = await pool.query('SELECT * FROM Presupuesto WHERE IdUsuario = ?', [idUser]);
      res.json({ presupuestos });
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener los presupuestos' });
    }
  }

  public async getPresupuesto(req: Request, res: Response): Promise<void> {
    const { idUser } = req.params;
    
    try {
      const [presupuesto] = await pool.query('SELECT * FROM Presupuesto WHERE IdUsuario = ?', [idUser]);
      console.log('Presupuesto:', presupuesto);
      if (presupuesto.length > 0) {
        res.json(presupuesto[0]);
      } else {
        res.status(404).json({ error: 'Presupuesto no encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener el presupuesto' });
    }
  }
  
}


  
export const presupuestoController = new PresupuestoController();
export default presupuestoController;
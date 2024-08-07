import { Request, Response } from 'express';
import pool from '../database';

class IngresoController {
  public async list(req: Request, res: Response): Promise<void> {
    const { userId } = req.params;
    try {
      const ingresos = await pool.query('SELECT * FROM Ingreso WHERE IdUsuario = ?', [userId]);
      res.json({ ingresos });
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener los ingresos' });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { userId, ...gastoData } = req.body; 
      await pool.query('INSERT INTO Ingreso SET ?', [{ ...gastoData, IdUsuario: userId }]);
      res.json({ message: 'Ingreso guardado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al crear el ingreso' });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { userId } = req.body;
    try {
      await pool.query('DELETE FROM Ingreso WHERE IdIngreso = ? AND IdUsuario = ?', [id, userId]);
      res.json({ message: 'El ingreso fue eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar el ingreso' });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { userId, ...gastoData } = req.body; 
    try {
      await pool.query('UPDATE Ingreso SET ? WHERE IdIngreso = ? AND IdUsuario = ?', [gastoData, id, userId]);
      res.json({ message: 'El ingreso fue actualizado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar el ingreso' });
    }
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { userId } = req.body; 
    try {
      const ingreso = await pool.query('SELECT * FROM Ingreso WHERE id = ? AND IdUsuario = ?', [id, userId]);
      if (ingreso.length > 0) {
        res.json(ingreso[0]);
      } else {
        res.status(404).json({ text: 'El ingreso no existe' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener el ingreso' });
    }
  }
}

export const ingresoController = new IngresoController();
export default ingresoController;

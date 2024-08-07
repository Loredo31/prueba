import { Request, Response } from 'express';
import pool from '../database';

class GastoController {
  public async list(req: Request, res: Response): Promise<void> {
    const { userId } = req.params;
    try {
      const gastos = await pool.query('SELECT * FROM Gasto WHERE IdUsuario = ?', [userId]);
      res.json({ gastos });
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener los gastos' });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { userId, ...gastoData } = req.body; 
      await pool.query('INSERT INTO Gasto SET ?', [{ ...gastoData, IdUsuario: userId }]);
      res.json({ message: 'Gasto guardado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al crear el gasto' });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { userId } = req.body;
    try {
      await pool.query('DELETE FROM Gasto WHERE IdGasto = ? AND IdUsuario = ?', [id, userId]);
      res.json({ message: 'El gasto fue eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar el gasto' });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { userId, ...gastoData } = req.body; 
    try {
      await pool.query('UPDATE Gasto SET ? WHERE IdGasto = ? AND IdUsuario = ?', [gastoData, id, userId]);
      res.json({ message: 'El gasto fue actualizado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar el gasto' });
    }
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { userId } = req.body; 
    try {
      const gasto = await pool.query('SELECT * FROM Gasto WHERE IdGasto = ? AND IdUsuario = ?', [id, userId]);
      if (gasto.length > 0) {
        res.json(gasto[0]);
      } else {
        res.status(404).json({ text: 'El gasto no existe o no pertenece al usuario' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener el gasto' });
    }
  }
}

export const gastoController = new GastoController();
export default gastoController;

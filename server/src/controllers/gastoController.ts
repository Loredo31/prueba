import { Request, Response } from 'express';
import pool from '../database';

class GastoController {
  public async list(req: Request, res: Response): Promise<void> {
    try {
      const gastos = await pool.query('SELECT * FROM Gasto');
      res.json({ gastos });
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener los gastos' });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      await pool.query('INSERT INTO Gasto SET ?', [req.body]);
      res.json({ message: 'Gasto guardado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al crear el gasto' });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await pool.query('DELETE FROM Gasto WHERE id = ?', [id]);
      res.json({ message: 'El gasto fue eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar el gasto' });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await pool.query('UPDATE Gasto SET ? WHERE id = ?', [req.body, id]);
      res.json({ message: 'El gasto fue actualizado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar el gasto' });
    }
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const gasto = await pool.query('SELECT * FROM Gasto WHERE id = ?', [id]);
      if (gasto.length > 0) {
        res.json(gasto[0]);
      } else {
        res.status(404).json({ text: 'El gasto no existe' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener el gasto' });
    }
  }
}

export const gastoController = new GastoController();
export default gastoController;

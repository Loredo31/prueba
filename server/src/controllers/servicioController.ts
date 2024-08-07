import { Request, Response } from 'express';
import pool from '../database';

class ServicioController {
  public async list(req: Request, res: Response): Promise<void> {
    try {
      const servicios = await pool.query('SELECT * FROM Servicio');
      res.json({ servicios });
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener los servicios' });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      await pool.query('INSERT INTO Servicio SET ?', [req.body]);
      res.json({ message: 'Servicio guardado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al crear el servicio' });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await pool.query('DELETE FROM Servicio WHERE IdServicio = ?', [id]);
      res.json({ message: 'El servicio fue eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar el servicio' });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await pool.query('UPDATE Servicio SET ? WHERE IdServicio = ?', [id]);
      res.json({ message: 'El servicio fue actualizado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar el servicio' });
    }
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const servicio = await pool.query('SELECT * FROM Servicio WHERE id = ?', [id]);
      if (servicio.length > 0) {
        res.json(servicio[0]);
      } else {
        res.status(404).json({ text: 'El servicio no existe' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener el servicio' });
    }
  }
}

export const servicioController = new ServicioController();
export default servicioController;

import { Request, Response } from 'express';
import pool from '../database';

class ServicioController {
  public async list(req: Request, res: Response): Promise<void> {
    const { userId } = req.params;
    try {
      const servicios = await pool.query('SELECT * FROM Servicio WHERE IdUsuario = ?', [userId]);
      res.json({ servicios });
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener los servicios' });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { userId, ...gastoData } = req.body;
      await pool.query('INSERT INTO Servicio SET ?', [{ ...gastoData, IdUsuario: userId }]);
      res.json({ message: 'Servicio guardado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al crear el servicio' });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { userId } = req.body;
    try {
      await pool.query('DELETE FROM Servicio WHERE IdServicio = ? AND IdUsuario = ?', [id, userId]);
      res.json({ message: 'El servicio fue eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar el servicio' });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { userId } = req.body;
    try {
      await pool.query('UPDATE Servicio SET ? WHERE IdServicio = ? AND IdUsuario = ?', [id, userId]);
      res.json({ message: 'El servicio fue actualizado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar el servicio' });
    }
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { userId } = req.body; 
    try {
      const servicio = await pool.query('SELECT * FROM Servicio WHERE id = ? AND IdUsuario = ?', [id, userId]);
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

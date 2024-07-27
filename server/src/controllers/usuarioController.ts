import { Request, Response} from 'express';
import pool from "../database";

class UsuarioController{
    public async list(req : Request, resp : Response){
        const usuarios = await pool.query('SELECT * FROM Usuario');
        resp.json({usuarios});
    }

    public async create(req : Request, resp : Response):Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO Usuario set ?', [req.body]);
        resp.json({message : 'User Saved'});
    }

    public async delete(req : Request, resp : Response){
        const {id} = req.params;
        await pool.query('DELETE FROM Usuario WHERE id = ?', [id]);
        resp.json({message : 'The user was deleted'});
    }

    public async update(req : Request, resp : Response){
        const {id} = req.params;
        await pool.query('UPDATE Usuario set ? WHERE id = ?', [req.body, id])
        resp.json({message : 'The user was updated'});
    }

    public async getOne(req : Request, resp: Response){
        const{id} = req.params; //Se recupera el id de request params
        const games = await pool.query('SELECT * FROM Usuario WHERE id =?', [id]);
        if(games.length > 0){
            return resp.json(games[0]);
        }
		resp.status(404).json({text : 'The user doesn´t exist'})
	}

}
export const usuarioController = new UsuarioController();
export default usuarioController;
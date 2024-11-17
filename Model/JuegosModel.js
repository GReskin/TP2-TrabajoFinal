import dotenv from 'dotenv'
dotenv.config()

import { Juego } from './dbModel.js';

class JuegosModel{

    async altaJuego(juego){
        return await Juego.create(juego);    
    }   

    async getJuegos(){
        let res
        try {
            res = await Juego.findAll();
        } catch (error) {          
            res = 'Error al obtener el listado de juegos: (Model) ' + error;
        }
        return res;
    }

    async getJuego(id){
        return await Juego.findByPk(id);
    }

    async updateJuego(id, precio){
        await Juego.update({precio: precio}, {where: {id: id}});
    }

    async deleteJuego(id){
        await Juego.destroy({where: {id: id}});
    }
} 

export default JuegosModel;
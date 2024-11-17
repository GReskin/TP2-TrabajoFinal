import dotenv from 'dotenv'
dotenv.config()

import { Cliente } from './dbModel.js';

class ClientesModel{

    async altaCliente(nombre){
        return await Cliente.create({nombre: nombre});    
    }   

    async getClientes(){
        return await Cliente.findAll();
    }

    async getCliente(id){
        return await Cliente.findByPk(id);
    }

    async updateCliente(id, nombre){
        await Cliente.update({nombre: nombre}, {where: {id: id}});
    }

    async deleteCliente(id){
        await Cliente.destroy({where: {id: id}});
    }
} 

export default ClientesModel;
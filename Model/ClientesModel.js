import Sequelize from 'sequelize'

import dotenv from 'dotenv'
dotenv.config()

import { Cliente } from './dbModel.js';

class ClientesModel{
    constructor(){
        this.clientes = new Cliente();
    }

    async altaCliente(nombre){
        return await Cliente.create({nombre: nombre});    
    }   

    async getClientes(){
        return await this.clientes.findAll();
    }

    async getCliente(id){
        return await this.clientes.findByPk(id);
    }

    async updateCliente(id, nombre){
        await this.clientes.update({nombre: nombre}, {where: {id: id}});
    }

    async deleteCliente(id){
        await this.clientes.destroy({where: {id: id}});
    }
}

export default ClientesModel;
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

    async obtenerClienteConMasCompras(fechaInicial, fechaFinal){
        const query = `SELECT c.nombre as nombreCliente,
                        COUNT(*) as cantidadCompras
                        FROM ventas v
                        JOIN clientes c on c.id = v.id_cliente
                        WHERE fecha between to_date('${fechaInicial}', 'dd-mm-yyyy') and to_date('${fechaFinal}', 'dd-mm-yyyy')
                        GROUP BY c.nombre
                        ORDER BY COUNT(*) DESC
                        LIMIT 1;`;

        return await Cliente.sequelize.query(query, { type: Cliente.sequelize.QueryTypes.SELECT });
    }
} 

export default ClientesModel;
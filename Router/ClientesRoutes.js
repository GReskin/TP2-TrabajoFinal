import express from 'express';
import ClientesController from '../Controlador/ClientesController.js';

class ClientesRoutes{
    constructor(){
        this.clientesController= new ClientesController();
    }
    start(){
        const routerCliente = express.Router();
        routerCliente.post('/clientes', this.clientesController.altaCliente);
        routerCliente.get('/clientes', this.clientesController.obtenerClientes);
        routerCliente.get('/clientes/:id', this.clientesController.obtenerClientePorId);
        routerCliente.put('/clientes/:id', this.clientesController.actualizarCliente);
        routerCliente.delete('/clientes/:id', this.clientesController.borrarCliente);
        return routerCliente
    }
}

export default ClientesRoutes;
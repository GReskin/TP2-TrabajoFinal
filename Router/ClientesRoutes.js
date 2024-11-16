import express from 'express';
import ClientesController from '../Controlador/ClientesController.js';

class ClientesRoutes{
    constructor(){
        this.clientesController= new ClientesController();
    }
    start(){
        const routerCliente = express.Router();
        routerCliente.post('/clientes', this.clientesController.altaCliente);
        //routerNotas.get('/listado', this.controladorNotas.obtenerListado);
        return routerCliente
    }
}

export default ClientesRoutes;
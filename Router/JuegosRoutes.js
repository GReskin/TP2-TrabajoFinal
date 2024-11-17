import express from 'express';
import JuegosController from '../Controlador/JuegosController.js';

class JuegosRoutes{
    constructor(){
        this.juegosController= new JuegosController();
    }
    start(){
        const routerJuego = express.Router();
        routerJuego.post('/juegos', this.juegosController.altaJuego);
        routerJuego.get('/juegos', this.juegosController.obtenerJuegos);
        routerJuego.get('/juegos/:id', this.juegosController.obtenerJuegoPorId);
        //routerCliente.put('/clientes/:id', this.clientesController.actualizarCliente);
        //routerCliente.delete('/clientes/:id', this.clientesController.borrarCliente);
        return routerJuego
    }
}

export default JuegosRoutes;
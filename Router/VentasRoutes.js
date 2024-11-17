import express from 'express';
import VentasController from '../Controlador/VentasController.js';

class VentasRoutes{
    constructor(){
        this.ventasController= new VentasController();
    }
    start(){
        const routerVentas = express.Router();
        routerVentas.post('/ventas', this.ventasController.altaVenta);
        routerVentas.get('/ventas', this.ventasController.obtenerVentas);
        routerVentas.get('/ventas/:id', this.ventasController.obtenerVentaPorId);
        return routerVentas
    }
}

export default VentasRoutes;
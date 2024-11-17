import express from 'express';
import InformeController from "../Controlador/InformeController.js";

class InformeRoutes{
    constructor(){
        this.informeController= new InformeController();
    }
    start(){
        const routerInforme = express.Router();
        routerInforme.get('/informe', this.informeController.obtenerInforme);
        return routerInforme
    }
}

export default InformeRoutes;
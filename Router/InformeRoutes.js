import express from 'express';
import InformeController from "../Controlador/InformeController.js";

class InformeRoutes{
    constructor(){
        this.informeController= new InformeController();
    }
    start(){
        const routerInforme = express.Router();
        routerInforme.get('/informe/rango', this.informeController.obtenerInforme);
        routerInforme.get('/informe/diario', this.informeController.obtenerInformeDiario);
        return routerInforme
    }
}

export default InformeRoutes;
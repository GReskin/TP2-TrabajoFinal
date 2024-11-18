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
        routerInforme.get('/informe/mail/rango', this.informeController.obtenerInformePorMail);
        routerInforme.get('/informe/mail/diario', this.informeController.obtenerInformeDiarioPorMail);
        return routerInforme
    }
}

export default InformeRoutes;
import express from 'express';
import InformeController from "../Controlador/InformeController.js";

class InformeRoutes{
    constructor(){
        this.informeController= new InformeController();
    }
    start(){
        const routerInforme = express.Router();
        routerInforme.post('/informe/rango', this.informeController.obtenerInforme);
        routerInforme.post('/informe/diario', this.informeController.obtenerInformeDiario);
        routerInforme.post('/informe/mail/rango', this.informeController.obtenerInformePorMail);
        routerInforme.post('/informe/mail/diario', this.informeController.obtenerInformeDiarioPorMail);
        return routerInforme
    }
}

export default InformeRoutes;
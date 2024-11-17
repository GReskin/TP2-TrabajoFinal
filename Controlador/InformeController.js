import InformeService from '../Servicio/InformeService.js';

class InformeController {
    constructor(){
        this.informeService = new InformeService();
    }

    obtenerInforme = async (req, res) => {
        let fechaInicial = req.body.fechaInicial;
        let fechaFinal = req.body.fechaFinal;
        let resultado = await this.informeService.obtenerInforme(fechaInicial, fechaFinal);
        res.json(resultado);
    }
}

export default InformeController;
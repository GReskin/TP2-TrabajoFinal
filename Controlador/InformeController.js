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

    obtenerInformeDiario = async (req, res) => {
        let fecha = req.body.fecha;
        let resultado = await this.informeService.obtenerInforme(fecha, fecha);
        res.json(resultado);
    }
}

export default InformeController;
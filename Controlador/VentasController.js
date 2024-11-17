import VentasService from '../Servicio/VentasService.js'

class VentasController {
    constructor(){
        this.ventasService = new VentasService();
    }

    altaVenta = async (req, res) => {
        let venta = req.body;
        let resultado = await this.ventasService.altaVenta(venta);
        res.json({resultado: resultado});
    }

    obtenerVentas = async (req, res) => {
        let resultado = await this.ventasService.obtenerListadoVentas();
        res.json(resultado);
    }

    obtenerVentaPorId = async (req, res) => {       
        let id = req.params.id;
        let resultado = await this.ventasService.obtenerVentaPorId(id);
        res.json(resultado);
    }
}

export default VentasController;
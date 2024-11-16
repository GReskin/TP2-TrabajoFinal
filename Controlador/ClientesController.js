import ClientesService from '../Servicio/ClientesService.js'

class ClientesController {
    constructor(){
        this.clientesService = new ClientesService();
    }

    altaCliente = async (req, res) => {
        let nombre = req.body.nombre;
        let resultado = await this.clientesService.altaCliente(nombre);
        res.json({resultado: resultado});
    }
}

export default ClientesController;
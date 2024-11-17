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

    obtenerClientes = async (req, res) => {
        let resultado = await this.clientesService.obtenerListadoClientes();
        res.json(resultado);
    }

    obtenerClientePorId = async (req, res) => {       
        let id = req.params.id;
        let resultado = await this.clientesService.obtenerClientePorId(id);
        res.json(resultado);
    }

    actualizarCliente = async (req, res) => {
        let id = req.params.id;
        let nombre = req.body.nombre;
        let resultado = await this.clientesService.actualizarCliente(id, nombre);
        res.json(resultado);
    }

    borrarCliente = async (req, res) => {
        let id = req.params.id;
        let resultado = await this.clientesService.borrarCliente(id);
        res.json(resultado);
    }
}

export default ClientesController;
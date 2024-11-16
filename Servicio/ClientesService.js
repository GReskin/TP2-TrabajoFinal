import ClientesModel from '../Model/ClientesModel.js'

class ClientesService{
    constructor(){
        this.clientes = new ClientesModel();
    }

    async altaCliente(nombreCliente){

        let res;

        try{
            if(nombreCliente != '' && nombreCliente != null){
                let cliente = await this.clientes.altaCliente(nombreCliente);
                res = 'Se creo el cliente con id: ' + cliente.id;
            } else {
                res = 'El nombre del cliente no puede estar vacío o ser null';
            }
        } catch (error){
            res = 'Error al crear el cliente: ' + error;
        }
        return res;
    }
}

export default ClientesService;


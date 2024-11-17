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

    async obtenerListadoClientes(){
        let res;
        try{
            let clientes = await this.clientes.getClientes();
            res = clientes;
        } catch (error){
            res = 'Error al obtener el listado de clientes: ' + error;
        }
        return res;
    }

    async obtenerClientePorId(id){
        let res;
        try{
            let cliente = await this.clientes.getCliente(id);
            res = cliente;
        } catch (error){
            res = 'Error al obtener el cliente: ' + error;
        }
        return res;
    }

    async actualizarCliente(id, nombre){
        let res;
        try{
            if(nombre != '' && nombre != null){
                await this.clientes.updateCliente(id, nombre);
                res = 'Se actualizo el cliente con id: ' + id;
            } else {
                res = 'El nombre del cliente no puede estar vacío o ser null';
            }
        } catch (error){
            res = 'Error al actualizar el cliente: ' + error;
        }
        return res;
    }

    async borrarCliente(id){
        let res;
        try{
            await this.clientes.deleteCliente(id);
            res = 'Se borro el cliente con id: ' + id;
        } catch (error){
            res = 'Error al borrar el cliente: ' + error;
        }
        return res;
    }
}

export default ClientesService;


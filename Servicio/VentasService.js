import VentasModel from "../Model/VentasModel.js";
import JuegosModel from "../Model/JuegosModel.js";
import ClientesModel from "../Model/ClientesModel.js";

class VentasService{
    constructor(){
        this.ventas = new VentasModel();
        this.juegos = new JuegosModel();
        this.clientes = new ClientesModel();
    }

    async altaVenta(ventaIngresada){
        let res;
        try{
            let id_juego = ventaIngresada.id_juego;
            let id_cliente = ventaIngresada.id_cliente;
            if(this.juegos.getJuego(id_juego) == null){
                res = 'El juego no existe';
            }
            else if(this.clientes.getCliente(id_cliente) == null){
                res = 'El cliente no existe';
            } else {
                let venta = await this.ventas.altaVenta(ventaIngresada);
                res = 'Se creo la venta con id: ' + venta.id;
            }
            
        } catch (error){
            res = 'Error al crear la venta: (Service) ' + error;
        }
        return res;
    }

    async obtenerListadoVentas(){
        let res;
        try{
            let ventas = await this.ventas.getVentas();
            res = ventas;
        } catch (error){
            res = 'Error al obtener el listado de ventas: ' + error;
        }
        return res;
    }

    async obtenerVentaPorId(id){
        let res;
        try{
            let venta = await this.ventas.getVenta(id);
            res = venta;
        } catch (error){
            res = 'Error al obtener la venta: ' + error;
        }
        return res;
    }
}

export default VentasService;

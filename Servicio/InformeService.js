import VentasModel from "../Model/VentasModel.js";
import JuegosModel from "../Model/JuegosModel.js";
import ClientesModel from "../Model/ClientesModel.js";

class InformeService {
    constructor(){
        this.ventas = new VentasModel();
        this.juegos = new JuegosModel();
        this.clientes = new ClientesModel();
    }

    obtenerInforme(fecha){
        this.obtenerInforme(fecha, fecha);
    }

    async obtenerJuegosPedidos(fechaInicial, fechaFinal){
        let res;
        try{
            res = await this.ventas.obtenerVentasPorJuego(fechaInicial, fechaFinal);
        } catch (error){
            res = 'Error al obtener el listado de juegos pedidos: ' + error;
        }
        return res;
    }

    obtenerInforme(fechaInicial, fechaFinal){
        let juegosPedidos = this.obtenerJuegosPedidos(fechaInicial, fechaFinal);
        //let totalVentas = obtenerTotalVentas(fechaInicial, fechaFinal);
        //let juegoMasVendido = obtenerJuegoMasVendido(fechaInicial, fechaFinal);
        //let juegoMasVendidoPorCategoria = obtenerJuegoMasVendidoPorCategoria(fechaInicial, fechaFinal);
        //let clienteConMasCompras = obtenerClienteConMasCompras(fechaInicial, fechaFinal);
    
        return juegosPedidos;
    }

    

}

export default InformeService;
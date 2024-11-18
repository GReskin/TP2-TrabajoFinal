import VentasModel from "../Model/VentasModel.js";
import JuegosModel from "../Model/JuegosModel.js";
import ClientesModel from "../Model/ClientesModel.js";

class InformeService {
    constructor(){
        this.ventas = new VentasModel();
        this.juegos = new JuegosModel();
        this.clientes = new ClientesModel();
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

    async obtenerTotalVentas(fechaInicial, fechaFinal){
        let res;

        try{
            res = await this.ventas.obtenerTotalVentas(fechaInicial, fechaFinal);
        } catch (error){
            res = 'Error al obtener el total de ventas: ' + error;
        }
        return res;
    }

    async obtenerJuegoMasVendido(fechaInicial, fechaFinal){
        let res;

        try{
            res = await this.ventas.obtenerJuegoMasVendido(fechaInicial, fechaFinal);
        } catch (error){
            res = 'Error al obtener el juego más vendido: ' + error;
        }
        return res;
    }

    async obtenerJuegoMasVendidoPorCategoria(fechaInicial, fechaFinal){
        let res;

        try{
            res = await this.ventas.obtenerJuegoMasVendidoPorCategoria(fechaInicial, fechaFinal);
        } catch (error){
            res = 'Error al obtener el juego más vendido por categoria: ' + error;
        }
        return res;
    }

    async obtenerClienteConMasCompras(fechaInicial, fechaFinal){
        let res;

        try{
            res = await this.clientes.obtenerClienteConMasCompras(fechaInicial, fechaFinal);
        } catch (error){
            res = 'Error al obtener el cliente con más compras: ' + error;
        }
        return res;
    }

    obtenerInforme(fechaInicial, fechaFinal){
        
        let juegosPedidos = this.obtenerJuegosPedidos(fechaInicial, fechaFinal);
        let totalVentas = this.obtenerTotalVentas(fechaInicial, fechaFinal);
        let juegoMasVendido = this.obtenerJuegoMasVendido(fechaInicial, fechaFinal);
        let juegoMasVendidoPorCategoria = this.obtenerJuegoMasVendidoPorCategoria(fechaInicial, fechaFinal);
        let clienteConMasCompras = this.obtenerClienteConMasCompras(fechaInicial, fechaFinal);
    
        return juegoMasVendidoPorCategoria;
    }


    

}

export default InformeService;
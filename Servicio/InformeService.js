import VentasModel from "../Model/VentasModel.js";
import JuegosModel from "../Model/JuegosModel.js";
import ClientesModel from "../Model/ClientesModel.js";

import PdfDocument from 'pdfkit';
import fs from 'fs';

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

        const doc = new PdfDocument();
        const nombreInforme = 'Informe de ventas ' + Date.now();
        const informe = './informes/' + nombreInforme + '.pdf';
        doc.pipe(fs.createWriteStream(informe));

        doc.fontSize(20).text('Tienda de videojuegos', {align: 'center'}).moveDown(1);
        doc.fontSize(16).text('Fecha de solicitud del informe: ' + new Date(), {align: 'left'}).moveDown(1);
        doc.fontSize(15).text('Informe de ventas ' + fechaInicial + ' a ' + fechaFinal, {align: 'left'}).moveDown(1);
        doc.fontSize(15).text('Juegos pedidos: ', {align: 'left'}).moveDown(1);
        //juegosPedidos.forEach(juego => {
        //    doc.fontSize(12).text(juego.nombreJuego + ': ' + juego.cantidadVentas, {align: 'left'}).moveDown(1);
        //});
        doc.fontSize(15).text('Total de ventas: ', {align: 'left'}).moveDown(1);
        doc.fontSize(12).text(totalVentas, {align: 'left'}).moveDown(1);
        doc.fontSize(15).text('Juego más vendido: ', {align: 'left'}).moveDown(1);
        doc.fontSize(12).text(juegoMasVendido.nombreJuego + ': ' + juegoMasVendido.cantidadVentas, {align: 'left'}).moveDown(1);
        doc.fontSize(15).text('Juego más vendido por categoría: ', {align: 'left'}).moveDown(1);
        //juegoMasVendidoPorCategoria.forEach(juego => {
        //    doc.fontSize(12).text(juego.categoria + ': ' + juego.nombreJuego , {align: 'left'}).moveDown(1);
        //});
        doc.fontSize(15).text('Cliente con más compras: ', {align: 'left'}).moveDown(1);
        doc.fontSize(12).text(clienteConMasCompras.nombreCliente, {align: 'left'}).moveDown(1);

        doc.end();
    
        return informe;
    }

}

export default InformeService;
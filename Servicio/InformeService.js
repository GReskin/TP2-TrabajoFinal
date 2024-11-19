import VentasModel from "../Model/VentasModel.js";
import JuegosModel from "../Model/JuegosModel.js";
import ClientesModel from "../Model/ClientesModel.js";

import PdfDocument from 'pdfkit';
import fs from 'fs';

import nodemailer from 'nodemailer';

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

    async generarPdf(juegosPedidos, totalVentas, juegoMasVendido, juegoMasVendidoPorCategoria, clienteConMasCompras, fechaInicial, fechaFinal){
        const doc = new PdfDocument();
        const nombreInforme = 'Informe de ventas ' + Date.now();
        const informe = './informes/' + nombreInforme + '.pdf';
        doc.pipe(fs.createWriteStream(informe));

        doc.fontSize(20).text('Tienda de videojuegos', {align: 'center'}).moveDown(1);
        doc.fontSize(16).text('Fecha de solicitud del informe: ' + new Date(), {align: 'left'}).moveDown(1);
        doc.fontSize(15).text('Informe de ventas ' + fechaInicial + ' a ' + fechaFinal, {align: 'left'}).moveDown(1);
        doc.fontSize(15).text('Juegos pedidos: ', {align: 'left'}).moveDown(1);
        juegosPedidos.forEach(juego => {
            doc.fontSize(12).text(" " + juego.nombrejuego + ': ' + juego.cantidadventas, {align: 'left'}).moveDown(1);
        });
        doc.fontSize(15).text('Total de ventas: ' + totalVentas[0].totalventas, {align: 'left'}).moveDown(1);
        doc.fontSize(15).text('Juego más vendido: ' + juegoMasVendido[0].nombrejuego + ': ' + juegoMasVendido[0].cantidadventas + ' copias vendidas', {align: 'left'}).moveDown(1);
        doc.fontSize(15).text('Juego más vendido por categoría: ', {align: 'left'}).moveDown(1);
        juegoMasVendidoPorCategoria.forEach(juego => {
            doc.fontSize(12).text(juego.categoria + ': ' + juego.nombrejuego , {align: 'left'}).moveDown(1);
        });
        doc.fontSize(15).text('Cliente con más compras: ' + clienteConMasCompras[0].nombrecliente, {align: 'left'}).moveDown(1);

        doc.end();
        
        return informe;
    }

    async obtenerInforme(fechaInicial, fechaFinal){
        let res = null
        if(fechaInicial && fechaFinal ){
                
        let juegosPedidos = await this.obtenerJuegosPedidos(fechaInicial, fechaFinal);
        let totalVentas = await this.obtenerTotalVentas(fechaInicial, fechaFinal);
        let juegoMasVendido = await this.obtenerJuegoMasVendido(fechaInicial, fechaFinal);
        let juegoMasVendidoPorCategoria = await this.obtenerJuegoMasVendidoPorCategoria(fechaInicial, fechaFinal);
        let clienteConMasCompras = await this.obtenerClienteConMasCompras(fechaInicial, fechaFinal);

        let rutaInforme = await this.generarPdf(juegosPedidos, totalVentas, juegoMasVendido, juegoMasVendidoPorCategoria, clienteConMasCompras, fechaInicial, fechaFinal);
        res = rutaInforme
        
        }
        return res;
    }

    
    async obtenerInformePorMail(fechaInicial, fechaFinal, mail){
        
        let rutaInforme = await this.obtenerInforme(fechaInicial, fechaFinal);

        let res = "No se puede mandar el informe";
        if(rutaInforme && mail ){   
            const options = {
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD    
                }
            }    
        const transporter = nodemailer.createTransport(options);

        const mailOptions = {
            from: process.env.EMAIL,
            to: mail,
            subject: 'Informe de ventas',
            text: 'Informe de ventas',
            attachments: [
                {
                    filename: 'Informe.pdf',
                    path: rutaInforme
                }
            ]
        }

        res = await transporter.sendMail(mailOptions);
    }

        return res;       
    }
}

export default InformeService;

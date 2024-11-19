import supertest from "supertest"
import { expect } from "chai"
import generadorCliente from './generador/cliente.js'
import generadorJuego from './generador/juego.js'
import generadorJuegoInvalido from './generador/juego.js'
import generadorInforme from './generador/informe.js'

const request = supertest("http://localhost:8080")


describe ("test api restful", () => {
    describe("GET", ()=> {
        it("Debería retornar status 200 en /clientes", async () => {
            const response = await request.get("/clientes");
            expect(response.status).to.eql(200);
        });

        it("Debería retornar status 200 en /juegos", async () => {
            const response = await request.get("/juegos");
            expect(response.status).to.eql(200);
        });

        it("Debería retornar status 200 en /ventas", async () => {
            const response = await request.get("/ventas");
            expect(response.status).to.eql(200);
        });
    })

    describe('POST', () => {
        it('----------------- debería incorporar un cliente ---------------', async () => {
            const clienteEnviado = generadorCliente.getCliente()
            const response = await request.post('/clientes').send(clienteEnviado)
            expect(response.status).to.eql(200)
            expect(response.body).to.have.property('resultado');
            const mensaje = response.body.resultado;
            expect(mensaje).to.match(/Se creo el cliente con id: \d+/);
            const id = parseInt(mensaje.split(': ')[1], 10);
            expect(id).to.be.a('number').and.greaterThan(0); 
        })

        it('------------------ debería incorporar un Juego -----------------', async () => {
            const juegoEnviado = generadorJuego.getJuego()
            console.log(juegoEnviado)
            const response = await request.post('/juegos').send(juegoEnviado)
            expect(response.status).to.eql(200)
            expect(response.text).to.match(/Se creo el juego: \d+/);
            const id = parseInt(response.text.split(': ')[1], 10);
            expect(id).to.be.a('number').and.greaterThan(0);
        })
        it('------------------ se intenta crear un juego con datos invalidos -----------------', async () => {
            const juegoEnviado = generadorJuegoInvalido.getJuegoInvalido()
            const response = await request.post('/juegos').send(juegoEnviado)
            expect(response.body).to.have.property('error');
            expect(response.body.error).to.eql("Error al dar de alta el juego, datos invalidos");
        })
        it('------------------ se envia el informe al email de forma exitosa -----------------', async () => {
            const informeEnviado = {
                fechaInicial: "01-01-2024",
                fechaFinal: "18-11-2024",
                mail: "jorgealbaq@gmail.com" 
            };
            const response = request.post('/informe/mail/rango').send(informeEnviado);
            const correoEnviado = response._data.mail;
            expect(correoEnviado).to.not.be.null;
        })  
        it('------------------ debería fallar al enviar mail como null -----------------', async () => {
            const informeEnviado = {
                fechaInicial: "01-01-2024",
                fechaFinal: "18-11-2024",
                mail: null
            };
            const response = request.post('/informe/mail/rango').send(informeEnviado);
            const correoEnviado = response._data.mail;
            expect(correoEnviado).to.be.null;
        })  
    })
})

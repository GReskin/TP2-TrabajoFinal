import { expect } from 'chai'
import generador from './generador/cliente.js'


describe('test del generador de cliente', () => {
    it('el cliente debe contener el campo nombre', () => {
        const cliente = generador.getCliente()
        expect(cliente).to.include.keys('nombre')
    })
    it('deberia generar clientes aleatorios', async () => {
        const cliente1 = generador.getCliente()
        const cliente2 = generador.getCliente()
        expect(cliente1.nombre).not.to.eql(cliente2.nombre)
    })
})

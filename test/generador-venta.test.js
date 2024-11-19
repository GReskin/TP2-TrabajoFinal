import { expect } from 'chai'
import generadorVenta from './generador/venta.js'


describe('test del generador de informe', () => {
    it('el informe debe contener los campos fecha, id_cliente y id_juego', () => {
        const informe = generadorVenta.getVenta()
        expect(informe).to.include.keys('fecha')
        expect(informe).to.include.keys('id_cliente')
        expect(informe).to.include.keys('id_juego')
    })
})
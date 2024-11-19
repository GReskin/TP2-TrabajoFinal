import { expect } from 'chai'
import generadorInforme from './generador/informe.js'


describe('test del generador de informe', () => {
    it('el informe debe contener los campos fechaInicial, fechaFinal y mail', () => {
        const informe = generadorInforme.getInforme()
        expect(informe).to.include.keys('fechaInicial')
        expect(informe).to.include.keys('fechaFinal')
        expect(informe).to.include.keys('mail')
    })
})
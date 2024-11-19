import { expect } from 'chai'
import generador from './generador/juego.js'


describe('test del generador de juegos', () => {
    it('el juego debe contener los campos nombre, categoria y precio', () => {
        const juego = generador.getJuego()
        expect(juego).to.include.keys('nombre')
        expect(juego).to.include.keys('categoria')
        expect(juego).to.include.keys('precio')
    })
    it('deberia generar juegos aleatorios', async () => {
        const juego1 = generador.getJuego()
        const juego2 = generador.getJuego()
        expect(juego1.nombre).not.to.eql(juego2.nombre)
        expect(juego1.categoria).not.to.eql(juego2.categoria)
        expect(juego1.precio).not.to.eql(juego2.precio)
    })
})

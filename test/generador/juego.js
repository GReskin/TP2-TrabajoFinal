import { faker } from "@faker-js/faker";

const getJuego = _ => ({
    nombre: faker.book.title(),
    categoria: faker.book.genre(),
    precio: faker.number.float({min: 10, max: 10000, fractionDigits: 2 }),
})

const getJuegoInvalido = _ => ({
    nombre: faker.book.title(),
    categoria: faker.book.genre(),
    precio: faker.number.float({min: -10000, max: -1, fractionDigits: 2 }),
})

export default {
    getJuego,
    getJuegoInvalido
}
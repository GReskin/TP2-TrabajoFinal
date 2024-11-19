import { faker } from "@faker-js/faker";

const getCliente = _ => ({
    nombre: faker.person.firstName()
})

export default {
    getCliente
}
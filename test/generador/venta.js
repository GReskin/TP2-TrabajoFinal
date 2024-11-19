import { faker } from "@faker-js/faker";

const getVenta = () => ({
    fecha: (() => {
        const fechaAleatoria = faker.date.past(); 
        const dia = String(fechaAleatoria.getDate()).padStart(2, '0'); 
        const mes = String(fechaAleatoria.getMonth() + 1).padStart(2, '0'); 
        const año = fechaAleatoria.getFullYear();
        return `${dia}-${mes}-${año}`;
    })(),
    id_cliente: faker.number.int({ min: 1, max: 100 }), 
    id_juego: faker.number.int({ min: 1, max: 100 }), 
});

export default {
    getVenta
};
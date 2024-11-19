import { faker } from "@faker-js/faker";

const getInforme = () => {
    // Generar fechaInicial en el pasado (pero no mayor que hoy)
    const fechaInicial = faker.date.past();
    const diaInicial = String(fechaInicial.getDate()).padStart(2, '0');
    const mesInicial = String(fechaInicial.getMonth() + 1).padStart(2, '0');
    const añoInicial = fechaInicial.getFullYear();
    
    // Generar fechaFinal en el pasado, pero posterior a fechaInicial
    let fechaFinal = faker.date.past();
    
    // Asegurarse de que fechaFinal sea después de fechaInicial
    while (fechaFinal <= fechaInicial) {
        fechaFinal = faker.date.past();
    }

    const diaFinal = String(fechaFinal.getDate()).padStart(2, '0');
    const mesFinal = String(fechaFinal.getMonth() + 1).padStart(2, '0');
    const añoFinal = fechaFinal.getFullYear();
    
    // Generar mail aleatorio
    const mail = faker.internet.email();

    return {
        fechaInicial: `${diaInicial}-${mesInicial}-${añoInicial}`,
        fechaFinal: `${diaFinal}-${mesFinal}-${añoFinal}`,
        mail
    };
};

export default {
    getInforme
};

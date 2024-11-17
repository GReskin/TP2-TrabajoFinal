import dotenv from 'dotenv'
dotenv.config()

import { Venta } from './dbModel.js';

class VentasModel{

    async altaVenta(venta){
        return await Venta.create(venta);    
    }

    async getVentas(){
        return await Venta.findAll();
    }

    async getVenta(id){
        return await Venta.findByPk(id);
    }

    async obtenerVentasPorJuego(fechaInicial, fechaFinal){
        const query = `select  j.nombre as nombreJuego, 
                        count (*) as cantidadVentas 
                        from ventas 
                        join juegos j
                        on id_juego = j.id
                        where fecha between to_date('${fechaInicial}', 'dd-mm-yyyy') and to_date('${fechaFinal}', 'dd-mm-yyyy')
                        group by j.nombre`;

        return await Venta.sequelize.query(query, { type: Venta.sequelize.QueryTypes.SELECT });
    }
} 

export default VentasModel;
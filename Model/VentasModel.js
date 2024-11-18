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

    async obtenerTotalVentas(fechaInicial, fechaFinal){
        const query = `select sum(j.precio) as totalVentas
                        from ventas v
                        join juegos j on j.id = v.id_juego
                        where v.fecha 
                        between to_date('${fechaInicial}', 'dd-mm-yyyy') and to_date('${fechaFinal}', 'dd-mm-yyyy')`;

        return await Venta.sequelize.query(query, { type: Venta.sequelize.QueryTypes.SELECT });
    }

    async obtenerJuegoMasVendido(fechaInicial, fechaFinal){
        const query = `SELECT j.nombre as nombreJuego,
		                COUNT(*) AS cantidadVentas
                        FROM ventas
                        JOIN juegos j on ventas.id_juego = j.id
                        WHERE fecha between to_date('${fechaInicial}', 'dd-mm-yyyy') and to_date('${fechaFinal}', 'dd-mm-yyyy')
                        GROUP BY j.nombre
                        ORDER BY COUNT(*) DESC
                        LIMIT 1;`;

        return await Venta.sequelize.query(query, { type: Venta.sequelize.QueryTypes.SELECT });
    }

    async obtenerJuegoMasVendidoPorCategoria(fechaInicial, fechaFinal){
        const query = `WITH Ventas AS (
            SELECT 
                j.categoria AS categoria,
                j.nombre AS nombreJuego,
                COUNT(*) AS cantidadVentas,
                ROW_NUMBER() OVER (PARTITION BY j.categoria ORDER BY COUNT(*) DESC) AS posicion
            FROM 
                ventas
            JOIN 
                juegos j on ventas.id_juego = j.id
            WHERE fecha between to_date('${fechaInicial}', 'dd-mm-yyyy') and to_date('${fechaFinal}', 'dd-mm-yyyy')
            GROUP BY j.categoria, j.nombre
            ORDER BY COUNT(*) DESC
        ) SELECT 
            categoria, nombreJuego, cantidadVentas
            FROM 
                Ventas
            WHERE 
                posicion = 1`;
        return await Venta.sequelize.query(query, { type: Venta.sequelize.QueryTypes.SELECT });
    }

} 

export default VentasModel;
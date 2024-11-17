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
} 

export default VentasModel;
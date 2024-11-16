import Sequelize from 'sequelize'

import dotenv from 'dotenv'
import e from 'express';
dotenv.config()

 const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres' 
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  //Clientes - id nombre
  const Cliente = sequelize.define('cliente', { 
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING
    }
  },{tableName: 'clientes'});

  //Juegos - id nombre categoria precio
  const Juego = sequelize.define('juego', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    categoria: {
      type: Sequelize.STRING
    },
    precio: {
      type: Sequelize.FLOAT
    }
  }, {tableName: 'juegos'});

  //Ventas - id id_cliente id_juego fecha
  const Venta = sequelize.define('venta', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fecha: {
      type: Sequelize.DATE
    },
    id_cliente: {
      type: Sequelize.INTEGER
    },
    id_juego: {
      type: Sequelize.INTEGER
    }
  }, {tableName: 'ventas'});

   //Crea las tablas en la db
  sequelize.sync();

  export { Cliente, Juego, Venta }
  
  //Create
  //var cliente = await Cliente.create({ nombre: 'Gaston' }); 
  //var juego = await Juego.create({ nombre: 'GTA V', categoria: 'Accion', precio: 2000 });
  //var venta = await Venta.create({ fecha: '2021-09-01', id_cliente: 1, id_juego: 1 });
  



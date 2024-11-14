 import Sequelize from 'sequelize'

const sequelize = new Sequelize('DESKTOP-34IG7U7\SQLEXPRESS\TiendaDeVideojuegos') 

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
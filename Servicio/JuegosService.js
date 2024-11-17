import JuegosModel from "../Model/JuegosModel.js";

class JuegosService{
    constructor(){
        this.juegos = new JuegosModel();
    }

    async altaJuego(juego){
        let juegoValido = true;
        let res;
        try{
            if (juego.nombre == '' || juego.nombre == null){
                juegoValido = false;
            }
            if (juego.categoria == '' || juego.categoria == null){
                juegoValido = false;
            }
            if (juego.precio < 0 || juego.precio == null){
                juegoValido = false;
            }

            if(juegoValido){
                let juego = await this.juegos.altaJuego(juego);
                res = 'Se creo el juego: ' + juego;
            } else {
                res = {error: 'Error al dar de alta el juego, datos invalidos'};
            }
        } catch (error){
            res = {error: 'Error al dar de alta el juego: ' + error};
        }
        
        return res;
    }

    async obtenerJuegos(){
        let res;
        try{
            let juegos = await this.juegos.getJuegos();
            res = juegos;
        } catch (error){
            res = 'Error al obtener el listado de juegos: ' + error;
        }
        return res;
    }

    async obtenerJuegoPorId(id){
        let res;
        try{
            let juegos = await this.juegos.getJuego(id);
            res = juegos;
        } catch (error){
            res = 'Error al obtener el juego: ' + error;
        }
        return res;
    }

}

export default JuegosService;


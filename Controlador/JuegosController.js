import JuegosService from '../Servicio/JuegosService.js'

class JuegosController {
    constructor(){
        this.JuegosService = new JuegosService();
    }

    altaJuego = async (req, res) => {
        let juego = req.body;
        let result = await this.JuegosService.altaJuego(juego);
        res.json(result);
    }

    obtenerJuegos = async (req, res) => {
        let result = await this.JuegosService.obtenerJuegos();
        res.json(result);
    }

    obtenerJuegoPorId = async (req, res) => {
        let id = req.params.id;
        let result = await this.JuegosService.obtenerJuegoPorId(id);
        res.json(result);
    }

}

export default JuegosController;
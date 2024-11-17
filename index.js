import express from 'express'
import ClientesRoutes from './Router/ClientesRoutes.js'
import JuegosRoutes from './Router/JuegosRoutes.js'
import VentasRoutes from './Router/VentasRoutes.js'
import InformeRoutes from './Router/InformeRoutes.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const routerCliente = new ClientesRoutes()
const routerJuegos = new JuegosRoutes()
const routerVentas = new VentasRoutes()
const routerInforme = new InformeRoutes()

app.use('/', routerCliente.start())
app.use('/', routerJuegos.start())
app.use('/', routerVentas.start())
app.use('/', routerInforme.start())

const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

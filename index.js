import express from 'express'
import ClientesRoutes from './Router/ClientesRoutes.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const routerCliente = new ClientesRoutes()

app.use('/', routerCliente.start())

const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

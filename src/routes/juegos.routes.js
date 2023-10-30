import express from 'express'
import juegosControllers from '../controllers/juegos.controllers.js'
const routeJuegos = express()

routeJuegos.get('/:idJuego/info', juegosControllers.juegosPorId)

routeJuegos.get('/:idEdicion/lista', juegosControllers.obtenerPorEdidicion)

export default routeJuegos
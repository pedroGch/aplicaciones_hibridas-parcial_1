import express from 'express'
import juegosControllers from '../controllers/juegos.controllers.js'
const routeJuegos = express()

routeJuegos.get('/:idJuego/jueces', juegosControllers.jucesQueVotaronA)

routeJuegos.get('/:idEdicion/lista', juegosControllers.obtenerPorEdidicion)

export default routeJuegos
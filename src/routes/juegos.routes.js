import express from 'express'
import  { validarJuegoCreacion }  from '../middlewares/juego.middlewares.js'
import juegosControllers from '../controllers/juegos.controllers.js'
const routeJuegos = express()

routeJuegos.post('/',[validarJuegoCreacion], juegosControllers.crearJuego)

routeJuegos.put('/:id', juegosControllers.editarJuego)

routeJuegos.delete('/:id', juegosControllers.borrarJuego)

routeJuegos.get('/:idJuego', juegosControllers.juegosPorId)

routeJuegos.get('/:idJuego/promedio', juegosControllers.promedio)

routeJuegos.get('/:edicion/edicion', juegosControllers.obtenerPorEdicion)


export default routeJuegos
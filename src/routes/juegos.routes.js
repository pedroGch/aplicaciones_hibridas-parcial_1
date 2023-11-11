import express from 'express'
import  { validarJuegoCreacion }  from '../middlewares/juego.middlewares.js'
import juegosControllers from '../controllers/juegos.controllers.js'
const routeJuegos = express()

routeJuegos.get('/:idJuego/info', juegosControllers.juegosPorId)

routeJuegos.get('/:idJuego/promedio', juegosControllers.promedio)

routeJuegos.get('/:edicion/edicion', juegosControllers.obtenerPorEdicion)

routeJuegos.post('/crear',[validarJuegoCreacion], juegosControllers.crearJuego)

routeJuegos.put('/:id/editar', juegosControllers.editarJuego)

routeJuegos.delete('/:id/borrar', juegosControllers.borrarJuego)


export default routeJuegos
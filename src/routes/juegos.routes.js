import express from 'express'
import juegosControllers from '../controllers/juegos.controllers.js'
const routeJuegos = express()

routeJuegos.get('/:idJuego/info', juegosControllers.juegosPorId)

routeJuegos.get('/:idJuego/promedio', juegosControllers.promedio)

routeJuegos.get('/:idEdicion/lista', juegosControllers.obtenerPorEdidicion)

routeJuegos.post('/crear', juegosControllers.crearJuego)

routeJuegos.put('/:id/editar', juegosControllers.editarJuego)

routeJuegos.delete('/:id/borrar', juegosControllers.borrarJuego)


export default routeJuegos
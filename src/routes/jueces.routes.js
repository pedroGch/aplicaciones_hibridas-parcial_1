import express from 'express'
import juecesControllers from '../controllers/jueces.controllers.js'
import  { validarVotoCreacion, juezExiste, juegoExiste, votoUnico }  from '../middlewares/voto.middlewares.js'
const routeJueces = express()

routeJueces.get('/:id/votosEmitidos', juecesControllers.juegosVotados)

//routeJueces.post('/votar', [validarVotoCreacion], [juezExiste], [juegoExiste], [votoUnico], juecesControllers.emitirVoto)
routeJueces.post('/votar', juecesControllers.emitirVoto)

export default routeJueces
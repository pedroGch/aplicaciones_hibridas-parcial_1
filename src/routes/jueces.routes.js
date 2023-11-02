import express from 'express'
import juecesControllers from '../controllers/jueces.controllers.js'
import  { validarVotoCreacion }  from '../middlewares/voto.middlewares.js'
const routeJueces = express()

routeJueces.get('/:id/votosEmitidos', juecesControllers.juegosVotados)

routeJueces.post('/votar', [validarVotoCreacion], juecesControllers.emitirVoto)

export default routeJueces
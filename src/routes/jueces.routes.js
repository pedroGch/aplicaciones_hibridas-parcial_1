import express from 'express'
import juecesControllers from '../controllers/jueces.controllers.js'
const routeJueces = express()

routeJueces.get('/:id/votosEmitidos', juecesControllers.juegosVotados)

routeJueces.post('/votar', juecesControllers.emitirVoto)

export default routeJueces
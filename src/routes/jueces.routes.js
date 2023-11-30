import express from 'express'
import juecesControllers from '../controllers/jueces.controllers.js'
import  { validarVotoCreacion, juezExiste, juegoExiste, votoUnico }  from '../middlewares/voto.middlewares.js'
const routeJueces = express()

//trigo todos los votos emitidos por un juez
routeJueces.get('/:id/votosEmitidos', juecesControllers.juegosVotados)

//creo un voto nuevo
routeJueces.post('/voto', [validarVotoCreacion], [juezExiste], [juegoExiste], [votoUnico], juecesControllers.emitirVoto)


export default routeJueces
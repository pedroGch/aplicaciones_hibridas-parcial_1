import juecesServices from "../services/jueces.services.js"
import juegosController from "./juegos.controllers.js"

async function juegosVotados(req, res) {
  juecesServices.juegosVotados(req.params.id)
  .then(function (resultado){
    const response = resultado.map( r =>{
      return {
        "nombre_juego" : r.nombre_juego,
        "jugabilidad"  : r.jugabilidad,
        "arte"         : r.arte,
        "sonido"       : r.sonido,
        "afinidad"     : r.afinidad
      }
    })
    res.status(200).json(response)
  })
  .catch( error => {
    res.status(500).send('error del sevidor')
  })
}

async function buscarActualizarJuego(idjuego,total_score) {
  juegosController.buscarActualizarJuego(idjuego,total_score)
}

function emitirVoto(req, res) {
  const data = {
    "juez_id"     : req.body.juez_id,
    "nombre_juez" : req.body.nombre_juez,
    "juego_id"    : req.body.juego_id,
    "nombre_juego": req.body.nombre_juego,
    "jugabilidad" : req.body.jugabilidad,
    "arte"        : req.body.arte,
    "sonido"      : req.body.sonido,
    "afinidad"    : req.body.afinidad
  }
  juecesServices.emitirVoto(data)
  .then(function (votoEmitido) {
    //sumo todos los scores
    const total_score = req.body.jugabilidad + req.body.arte + req.body.sonido + req.body.afinidad
    const idjuego     = req.body.juego_id
    buscarActualizarJuego(idjuego,total_score)
    res.status(200).json(votoEmitido)
  })
  .catch( error => {
    res.status(500).send('error del sevidor')
  })
}

async function juezExiste (id) {
  const juez = await juecesServices.juezExiste(id)
  return  juez
}

async function juezVoto (id) {
  return await juecesServices.juegosVotados(id)
}

export default{
  juegosVotados,
  emitirVoto,
  juezExiste,
  juezVoto
}
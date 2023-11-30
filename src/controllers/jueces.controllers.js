import juecesServices from "../services/jueces.services.js"
import juegosServices from "../services/juegos.services.js"

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

async function emitirVoto(req, res) {
  const data = {
    "juego_id"    : req.body.juego_id,
    "juez_id"     : req.body.juez_id,
    "jugabilidad" : req.body.jugabilidad,
    "arte"        : req.body.arte,
    "sonido"      : req.body.sonido,
    "afinidad"    : req.body.afinidad
  }
  const juez  = await juecesServices.juezExiste(req.body.juez_id)
  const juego = await juegosServices.juegoExiste(req.body.juego_id)
  
  const voto = {...data, nombre_juez: juez.name, nombre_juego: juego.name, genre: juego.genre}
  juecesServices.emitirVoto(voto)
  .then(function (votoEmitido) {
    //sumo todos los scores
    const total_score = req.body.jugabilidad + req.body.arte + req.body.sonido + req.body.afinidad
    const idjuego     = req.body.juego_id
    //actualizo el total_score de cada game
    juegosServices.actualizarScore(idjuego, total_score)
    res.status(200).json(votoEmitido)
  })
  .catch( error => {
    res.status(500).send('error del sevidor')
  })
}

export default{
  juegosVotados,
  emitirVoto
}
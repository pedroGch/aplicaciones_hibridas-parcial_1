import juecesServices from "../services/jueces.services.js"

async function juegosVotados(req, res) {
  juecesServices.juegosVotados(req.params.id)
  .then(function (resultado){
    res.status(200).json(resultado)
  })
  .catch( error => {
    res.status(500).send('error del sevidor')
  })
}

function emitirVoto(req, res) {
  const data = {
    "juez_id"    : req.body.juez_id,
    "juego_id"   : req.body.juego_id,
    "jugabilidad": req.body.jugabilidad,
    "arte"       : req.body.arte,
    "sonido"     : req.body.sonido,
    "afinidad"   : req.body.afinidad
  }
  juecesServices.emitirVoto(data)
  .then(function (votoEmitido) {
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
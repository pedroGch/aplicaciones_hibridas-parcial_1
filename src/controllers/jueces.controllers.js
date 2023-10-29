import juecesServices from "../services/jueces.services.js"


function juegosVotados(req, res) {
  juecesServices.juegosVotados(req.params.id)
  .then(function (listaDeJuegos) {
    res.status(200).json(listaDeJuegos)
  })
  .catch( error => {
    res.status(500).send('error del sevidor')
  })
}

function emitirVoto(req, res) {
  juecesServices.emitirVoto(req.body)
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
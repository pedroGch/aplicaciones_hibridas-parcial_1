import juegosServices from "../services/juegos.services.js"


function jucesQueVotaronA(req, res) {
  juegosServices.jucesQueVotaronA(req.params.id)
  .then(function (listaDeJueces) {
    res.status(200).json(listaDeJueces)
  })
  .catch( error => {
    res.status(500).send('error del sevidor')
  })
}

function obtenerPorEdidicion(req, res) {
  juegosServices.obtenerPorEdidicion(req.params.edicion)
  .then(function (listaPorEdicion) {
    res.status(200).json(listaPorEdicion)
  })
  .catch( error => {
    res.status(500).send('error del sevidor')
  })
}

export default{
  jucesQueVotaronA,
  obtenerPorEdidicion
}
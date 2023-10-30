import juegosServices from "../services/juegos.services.js"


async function juegosPorId(req, res) {
  juegosServices.juegosPorId(req.params.idJuego)
  .then(function (resultado){
    const response = resultado.map( r =>{
      return {
        "nombre_juez"  : r.nombre_juez,
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
  juegosPorId,
  obtenerPorEdidicion
}
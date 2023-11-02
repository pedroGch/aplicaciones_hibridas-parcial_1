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

async function promedio(req, res) {
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

function crearJuego(req, res) {
  const data = {
    "name"    : req.body.name,
    "genre"   : req.body.genre,
    "members" : req.body.members,
    "edition" : req.body.edition
  }

  juegosServices.crearJuego(data)
  .then( function (juego) {
    res.status(200).json(juego)
  })
  .catch( error => {
    res.status(500).json(error)
  })
}

function editarJuego(req, res) {
  juegosServices.editarJuego(req.params.id, req.body)
  .then(respuesta => {
    res.status(200).json(respuesta)
  })
  .catch( error => {
    res.status(500).json(error.message)
  })
}

function borrarJuego(req, res) {
  juegosServices.borrarJuego(req.params.id)
  .then( (respuesta) => {
    if (respuesta) {
      res.status(200).json(respuesta)
    }else{
      res.status(404).send('recurso no encontrado')
    }
  })
  .catch((error) => {
    res.status(500).send('error: ' + error)
  })
}

async function juegoExiste (id) {
  const juego = await juegosServices.juegoExiste(id)
  return  juego
}

export {
  juegosPorId,
  obtenerPorEdidicion,
  promedio,
  crearJuego,
  editarJuego,
  borrarJuego,
  juegoExiste
}

export default{
  juegosPorId,
  obtenerPorEdidicion,
  promedio,
  crearJuego,
  editarJuego,
  borrarJuego,
  juegoExiste
}
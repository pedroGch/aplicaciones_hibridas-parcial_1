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
    res.status(500).send(error.message)
  })
}

async function promedio(req, res) {
  juegosServices.juegosPorId(req.params.idJuego)
  .then(function (resultado){
    const promedios = {
      "nombre_juego" : "",
      "jugabilidad"  : 0,
      "arte"         : 0,
      "sonido"       : 0, 
      "afinidad"     : 0
    }

    const cantidadElementos = resultado.length
    
    resultado.forEach(j => {
      promedios.nombre_juego = j.nombre_juego
      promedios.jugabilidad += j.jugabilidad
      promedios.arte        += j.arte
      promedios.sonido      += j.sonido
      promedios.afinidad    += j.afinidad
    })

    const response = {
      "nombre_juego" : promedios.nombre_juego,
      "jugabilidad"  : promedios.jugabilidad / cantidadElementos,
      "arte"         : promedios.arte / cantidadElementos,
      "sonido"       : promedios.sonido / cantidadElementos,
      "afinidad"     : promedios.afinidad / cantidadElementos
    }

    res.status(200).json(response)
  })
  .catch( error => {
    res.status(500).json(error)
  })
}

function obtenerPorEdicion(req, res) {
  juegosServices.obtenerPorEdicion(req.params.edicion, {"genre": req.query.genre})
  .then(function (listaPorEdicion) {

    console.log(listaPorEdicion)
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

async function buscarActualizarJuego(idjuego,total_score){
  let juego         = await juegosServices.juegoExiste(idjuego)
  juego.total_score = juego.total_score + total_score
  juegosServices.editarJuego(idjuego, juego)
}

export {
  juegosPorId,
  obtenerPorEdicion,
  promedio,
  crearJuego,
  editarJuego,
  borrarJuego,
  juegoExiste,
  buscarActualizarJuego
}

export default{
  juegosPorId,
  obtenerPorEdicion,
  promedio,
  crearJuego,
  editarJuego,
  borrarJuego,
  juegoExiste,
  buscarActualizarJuego
}
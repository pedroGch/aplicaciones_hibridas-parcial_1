import votoSchema  from "../schemas/voto.schemas.js";
import juecesControllers from '../controllers/jueces.controllers.js'
import juegosControllers from '../controllers/juegos.controllers.js'

export function validarVotoCreacion (req, res, next) {
  votoSchema.votoCrearSchema.validate(req.body, {
    stripUnknown: true,
    abortEarly: false
  })
    .then(async function (juego) {

      req.body = juego
      next()
    })
    .catch(function (err) {
      res.status(400).json(err.errors)
    })

}

export async function juezExiste(req, res, next) {
  try {
    const juez = await juecesControllers.juezExiste(req.body.juez_id)

    if (juez){
      next()
    }else{
      res.status(400).send('el juez no existe, no puede votar')
    } 

  } catch (error) {
    res.status(500).send('HUBO UN ERROR EN EL SERVIDOR BUSCANDO AL JUEZ')
  }
  
}

export async function juegoExiste(req, res, next) {
  try {
    const juego = await juegosControllers.juegoExiste(req.body.juego_id)

    if (juego){
      next()
    }else{
      res.status(400).send('el juego no existe, no se puede calificar')
    } 

  } catch (error) {
    res.status(500).send('HUBO UN ERROR EN EL SERVIDOR BUSCANDO EL JUEGO')
  }
  
}

export async function votoUnico(req, res, next) {
  try {
    const juegosVotados = await juecesControllers.juezVoto(req.body.juez_id)
    const juegoExiste = juegosVotados.some( j => j.juego_id === req.body.juego_id )

    if (!juegoExiste){
      next()
    }else{
      res.status(400).send('el juego ya fue calificado por este juez')
    }

  } catch (error) {
    res.status(500).send('HUBO UN ERROR EN EL SERVIDOR BUSCANDO EL JUEGO')
  }
}
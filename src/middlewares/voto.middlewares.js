import votoSchema  from "../schemas/voto.schemas.js";

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
      console.log(err) 
      res.status(400).json(err.errors)
    })

}
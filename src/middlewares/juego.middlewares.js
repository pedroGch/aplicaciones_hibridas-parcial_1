import juegoSchema  from "../schemas/juegos.schemas.js";

export function validarJuegoCreacion (req, res, next) {
  juegoSchema.juegoCrearSchema.validate(req.body, {
    stripUnknown: true,
    abortEarly: false
  })
    .then(async function (juego) {

      req.body = juego
      next()
    })
    .catch(function (err) {
      res.status(401).json(err)
    })

}
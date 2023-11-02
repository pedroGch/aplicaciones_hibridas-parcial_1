
import yup from 'yup'

const msj_name_requided    = 'el nombre es obligatorio'

const msj_genre_requided   = 'el genero es obligatorio'

const msj_edition_requided = 'la edición es obligatoria'
const msj_edition_positive = 'la edicion ingresada no puede ser negativa'
const msj_edition_integer  = 'la edicion ingresada debe ser un número entero'

const juegoCrearSchema = yup.object({

  name    : yup.string().required(msj_name_requided),
  genre   : yup.string().required(msj_genre_requided),
  edition : yup.number().positive(msj_edition_positive).integer(msj_edition_integer).required(msj_edition_requided),

})

export default {
  juegoCrearSchema
}
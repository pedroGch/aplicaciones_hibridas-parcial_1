
import yup from 'yup'

const msj_juezId_required      = 'el id del juez es obligario'
const msj_juezNombre_required  = 'el nombre del juez es obligario'

const msj_juegoId_required     = 'el id del juego es obligario'
const msj_juegoNombre_required = 'el nombre del juego es obligario'

const msj_jugabilidad_min      = 'el puntaje minimo en jugabilidad debe ser mayor a 1'
const msj_jugabilidad_max      = 'el puntaje de jugabilidad, no puede ser mayor de 10'
const msj_jugabilidad_required = 'jugabilidad es obligatorio'

const msj_arte_min             =  'el puntaje minimo en arte debe ser mayor a 1'
const msj_arte_max             =  'el puntaje de arte, no puede ser mayor de 10'
const msj_arte_required        =  'arte es obligatorio'

const msj_sonido_min           =  'el puntaje minimo en sonido debe ser mayor a 1'
const msj_sonido_max           =  'el puntaje de sonido, no puede ser mayor de 10'
const msj_sonido_required      =  'sonido es obligatorio'

const msj_afinidad_min         =  'el puntaje minimo en afinidad debe ser mayor a 1'
const msj_afinidad_max         =  'el puntaje de afinidad, no puede ser mayor de 10'
const msj_afinidad_required    =  'afinidad es obligatorio'

const votoCrearSchema = yup.object({

  juez_id      : yup.string().required(msj_juezId_required) ,
  nombre_juez  : yup.string().required(msj_juezNombre_required) ,
  juego_id     : yup.string().required(msj_juegoId_required) ,
  nombre_juego : yup.string().required(msj_juegoNombre_required) ,
  jugabilidad  : yup.number().integer().min(1, msj_jugabilidad_min).max(10, msj_jugabilidad_max).required(msj_jugabilidad_required) ,
  arte         : yup.number().integer().min(1, msj_arte_min).max(10, msj_arte_max).required(msj_arte_required) ,
  sonido       : yup.number().integer().min(1, msj_sonido_min).max(10, msj_sonido_max).required(msj_sonido_required) ,
  afinidad     : yup.number().integer().min(1, msj_afinidad_min).max(10, msj_afinidad_max).required(msj_afinidad_required) ,

})

export default {
  votoCrearSchema
}

import yup from 'yup'

const juegoCrearSchema = yup.object({
  name: yup.string().required(),
  genre: yup.string().required(),
  edition : yup.number().positive().integer().required(),
})

export default {
  juegoCrearSchema
}
import proyectosServices from '../services/proyectos.services.js'

function todosLosProyectos(req, res) {
  try {
    const proyectos = proyectosServices.todosLosProyectos
    if (proyectos){
      res.status(200).json(proyectos)
    }else{
      res.status(400).send('algo malo ocurrio')
    }
  } catch (error) {
    res.status(500).send('error del sevidor')
    
  }
}

function proyectosPorId(req, res) {
  return res.status(200).send('te doy todos los proyectos')
}

function proyectosPorSeccion(req, res) {
  return res.status(200).send('te doy todos los proyectos')
}

function crearProyecto(req, res) {
  return res.status(200).send('te doy todos los proyectos')
}

function eliminarProyecto(req, res) {
  return res.status(200).send('te doy todos los proyectos')
}

function editarProyecto(req, res) {
  return res.status(200).send('te doy todos los proyectos')
}

export default{
  todosLosProyectos,
  proyectosPorSeccion,
  proyectosPorId,
  crearProyecto,
  eliminarProyecto,
  editarProyecto
}
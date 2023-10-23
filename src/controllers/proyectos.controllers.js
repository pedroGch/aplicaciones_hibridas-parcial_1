import proyectosServices from '../services/proyectos.services.js'
import {ObjectId } from 'mongodb'

async function todosLosProyectos(req, res) {
  proyectosServices.todosLosProyectos()
    .then(function (proyectos) {
      console.log(proyectos)
      res.status(200).json(proyectos)
    })
    .catch( error => {
      res.status(500).send('error del sevidor')
    })
  
    
  
}

function proyectoPorId(req, res) {
  proyectosServices.proyectoPorId(req.params.id)
  .then(proyecto => {
    res.status(200).json(proyecto)
  })
  .catch( error => {
    res.status(500).send('error del sevidor')
  })
}

function proyectosPorSeccion(req, res) {
  proyectosServices.filtrarPorSeccion(req.params.seccion)
  .then( (proyecto) => {
    if (proyecto) {
      res.status(200).json(proyecto)
    }else{
      res.status(404).send('seccion no encontrada')
    }
  })
  .catch((error) => {
    res.status(500).send('error: ' + error)
  })
}

function proyectosPorTecnologia(req, res) {
  proyectosServices.filtrarPorTecnologia(req.params.tecnologia)
  .then( (proyecto) => {
    if (proyecto) {
      res.status(200).json(proyecto)
    }else{
      res.status(404).send('tecnologia no encontrada')
    }
  })
  .catch((error) => {
    res.status(500).send('error: ' + error)
  })
}

async function crearProyecto(req, res) {
  const data = {
    "_id": new ObjectId(),
    "name": req.body.name,
    "description": req.body.description,
    "link": req.body.link,
    "img": req.body.img,
    "technologies" : req.body.technologies,
    "section": req.body.section,
  }

  const nuevoProyecto = await proyectosServices.crearProyecto({...data})
  if (nuevoProyecto){
    res.status(200).json(nuevoProyecto)
  }else{
    res.status(500).send('error del servidor')
  } 
  

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
  proyectoPorId,
  crearProyecto,
  eliminarProyecto,
  editarProyecto,
  proyectosPorTecnologia
}
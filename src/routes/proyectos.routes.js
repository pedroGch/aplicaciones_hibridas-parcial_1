import express from 'express'
import proyectosController from '../controllers/proyectos.controllers.js'

const routeProyectos = express()

routeProyectos.get('/', proyectosController.todosLosProyectos)

routeProyectos.get('/:id', proyectosController.proyectoPorId)

routeProyectos.get('/seccion/:seccion', proyectosController.proyectosPorSeccion)

routeProyectos.post('/', proyectosController.crearProyecto)

routeProyectos.delete('/:id', proyectosController.eliminarProyecto)

routeProyectos.put('/:id', proyectosController.editarProyecto)


export default routeProyectos

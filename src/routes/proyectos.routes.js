import express from 'express'
import proyectosController from '../controllers/proyectos.controllers.js'

const route = express()

route.get('/proyectos', proyectosController.todosLosProyectos)

route.get('/proyectos/:id', proyectosController.proyectosPorId)

route.get('/proyectos/:seccion', proyectosController.proyectosPorSeccion)

route.post('/proyectos', proyectosController.crearProyecto)

route.delete('/proyectos/:id', proyectosController.eliminarProyecto)

route.put('/proyectos/:id', proyectosController.editarProyecto)


export default route

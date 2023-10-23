import express from 'express'
import clientesControllers from '../controllers/clientes.controllers.js'
const routeClientes = express()

routeClientes.get('/proyectos', clientesControllers.todosLosClientes)

routeClientes.get('/proyecto/:id', clientesControllers.clientesPorId)

routeClientes.post('/proyectos', clientesControllers.crearCliente)

routeClientes.delete('/proyectos/:id', clientesControllers.bajaCliente)

routeClientes.put('/proyectos/:id', clientesControllers.bajaCliente)


export default routeClientes
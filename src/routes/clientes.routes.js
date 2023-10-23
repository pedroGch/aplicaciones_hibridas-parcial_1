import express from 'express'
import clientesControllers from '../controllers/clientes.controllers.js'
const routeClientes = express()

routeClientes.get('/', clientesControllers.todosLosClientes)

routeClientes.post('/', clientesControllers.crearCliente)

routeClientes.get('/:id', clientesControllers.clientesPorId)

routeClientes.delete('/borrar/:id', clientesControllers.bajaCliente)

routeClientes.put('/editar/:id', clientesControllers.editarCliente)


export default routeClientes
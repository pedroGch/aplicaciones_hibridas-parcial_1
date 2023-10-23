import express from 'express'
import routeClientes from './clientes.routes.js'
import routeProyectos from './proyectos.routes.js'


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)

  router.use('/clientes', routeClientes)
  router.use('/proyectos', routeProyectos)
}


export {
  routerApi
}
export default{
  routerApi
} 
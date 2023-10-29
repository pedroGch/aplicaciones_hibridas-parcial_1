import express from 'express'
import routeJueces from './jueces.routes.js'
import routeJuegos from './juegos.routes.js'



function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/juegos', routeJuegos)
  router.use('/jueces', routeJueces)
}


export {
  routerApi
}
export default{
  routerApi
} 
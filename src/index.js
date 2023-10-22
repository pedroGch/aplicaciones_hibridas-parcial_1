import express from 'express'
import proyectosRoutes from './routes/proyectos.routes.js'

const app = express()

app.use(express.json())

app.use(proyectosRoutes)

app.listen(2222, () => {
  console.log(`estas conectado al puerto 2222`)
})
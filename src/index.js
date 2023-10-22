import express from 'express'
import proyectosRoutes from './routes/proyectos.routes.js'

const app = express()
const port = 2222

app.use(express.json())

app.use(proyectosRoutes)

app.listen(port, () => {
  console.log(`estas conectado al puerto: ${port}`)
})
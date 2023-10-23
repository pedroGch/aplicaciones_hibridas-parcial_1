import express from 'express'
import { routerApi } from './routes/index.routes.js'

const app = express()
const port = 2222

app.use(express.json())

routerApi(app)

app.listen(port, () => {
  console.log(`estas conectado al puerto: ${port}`)
})
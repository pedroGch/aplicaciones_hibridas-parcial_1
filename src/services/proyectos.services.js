import { MongoClient, ObjectId } from 'mongodb'

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH20231CP1")
const ProyectosCollection = db.collection('Projects')


async function todosLosProyectos() {
  await cliente.connect()
  const proyectos = ProyectosCollection.find().toArray()
  return proyectos
}

async function proyectoPorId(id) {
  await cliente.connect()
  return ProyectosCollection.findOne({_id: new ObjectId(id)})
}

async function crearProyecto(data) {
  await cliente.connect()
  const nuevoProyecto = {...data}
  await ProyectosCollection.insertOne(nuevoProyecto)
  return nuevoProyecto
}

function eliminarProyecto(id) {
  return true;
}

function editarProyecto(id) {
  return true;
}

export default{
  todosLosProyectos,
  proyectoPorId,
  crearProyecto,
  eliminarProyecto,
  editarProyecto
}
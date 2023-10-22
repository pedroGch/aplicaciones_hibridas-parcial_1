import { MongoClient, ObjectId } from 'mongodb'

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH20231CP1")
const ProyectosCollection = db.collection('proyects')


async function todosLosProyectos() {
  await cliente.connect()
  return ProyectosCollection.find().toArray()
}

function proyectosPorId(id) {
  return true;
}

function crearProyecto(id) {
  

  /// side effect
  

  return newProduct
}

function eliminarProyecto(id) {
  return true;
}

function editarProyecto(id) {
  return true;
}

export default{
  todosLosProyectos,
  proyectosPorId,
  crearProyecto,
  eliminarProyecto,
  editarProyecto
}
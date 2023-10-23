import { MongoClient, ObjectId } from 'mongodb'

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH20231CP1")
const ProyectosCollection = db.collection('Projects')


async function filtrarPorTecnologia(tecnologia) {
  await cliente.connect()
  return ProyectosCollection.find({technologies: {$in: [tecnologia] }}).toArray()
}

async function filtrarPorSeccion(seccion) {
  await cliente.connect()
  return ProyectosCollection.find({section: seccion}).toArray()
}

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

async function eliminarProyecto(id) {
  await cliente.connect()
  return await ProyectosCollection.deleteOne({_id: new ObjectId(id)})
}

async function editarProyecto(id, data) {
  await cliente.connect()
  return await ProyectosCollection.updateOne({_id: new ObjectId(id)}, {$set: {...data}})
}

export default{
  todosLosProyectos,
  proyectoPorId,
  crearProyecto,
  eliminarProyecto,
  editarProyecto,
  filtrarPorTecnologia,
  filtrarPorSeccion
}
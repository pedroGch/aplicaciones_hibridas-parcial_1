import { MongoClient, ObjectId } from 'mongodb'
import votosServices from "./votos.services.js"

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH_PARCIAL1")
const juegosCollection = db.collection("games")

async function juegosPorId(id) {
  return votosServices.juegosPorId(id)
  
} 

async function obtenerPorEdidicion (edicion){
  await cliente.connect()
  return{
    '_id': new ObjectId(),
    'nombre_juez' : 'patricio', 
  }
}

async function crearJuego(data) {
  await cliente.connect()
  const nuevoJuego = {"_id": new ObjectId() , ...data}
  await juegosCollection.insertOne(nuevoJuego)
  return nuevoJuego
}

async function editarJuego(data) {
  await cliente.connect()
  return await juegosCollection.updateOne({_id: new ObjectId(id)}, {$set: {...data}})
}

async function borrarJuego(id) {
  await cliente.connect()
  return await juegosCollection.deleteOne({_id: new ObjectId(id)})
}


export default{
  juegosPorId,
  obtenerPorEdidicion,
  crearJuego,
  editarJuego,
  borrarJuego
}
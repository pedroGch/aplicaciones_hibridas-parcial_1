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

export default{
  juegosPorId,
  obtenerPorEdidicion
}
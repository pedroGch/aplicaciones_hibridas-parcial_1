import { MongoClient, ObjectId } from 'mongodb'

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH_PARCIAL1")
const juegosCollection = db.collection("games")

async function jucesQueVotaronA (id_juego) {
  await cliente.connect()
  return{
    '_id': new ObjectId(),
    'nombre_juez' : 'patricio' 
  }
}
async function obtenerPorEdidicion (edicion){
  await cliente.connect()
  return{
    '_id': new ObjectId(),
    'nombre_juez' : 'patricio', 
  }
}

export default{
  jucesQueVotaronA,
  obtenerPorEdidicion
}
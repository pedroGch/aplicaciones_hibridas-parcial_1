import { MongoClient, ObjectId } from 'mongodb'

async function jucesQueVotaronA (id_juego) {
  return{
    '_id': new ObjectId(),
    'nombre_juez' : 'patricio' 
  }
}
async function obtenerPorEdidicion (edicion){
  return{
    '_id': new ObjectId(),
    'nombre_juez' : 'patricio', 
  }
}

export default{
  jucesQueVotaronA,
  obtenerPorEdidicion
}
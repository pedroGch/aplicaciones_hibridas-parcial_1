import { MongoClient, ObjectId } from 'mongodb'

/**
 * Obtiene mediante el id de un juez, los juegos que fueron que fueron votados 
 * @param {*} id 
 * @returns []
 */
async function juegosVotados(id) {
  return {
    '_id': new ObjectId(),
    'nombre': 'Final Fantasy 9'
  }
}

/**
 * recibe un voto lo guarda en la DB y lo retorna con id
 * @param {*} data 
 * @returns {} 
 */
async function emitirVoto(data){
  return {
    '_id': new ObjectId(),
    'nombre': 'Final Fantasy 9'
  }
}


export default{
  juegosVotados,
  emitirVoto
}
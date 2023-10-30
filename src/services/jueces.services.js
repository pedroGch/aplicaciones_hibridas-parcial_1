import { MongoClient, ObjectId } from 'mongodb'
import votosServices from "./votos.services.js"

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH_PARCIAL1")
const juegosCollection = db.collection("judges")

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
  return votosServices.almacenarVoto(data)
}


export default{
  juegosVotados,
  emitirVoto
}
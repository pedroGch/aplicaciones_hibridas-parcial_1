import { MongoClient, ObjectId } from 'mongodb'
import votosServices from "./votos.services.js"

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH_PARCIAL1")
const juegosCollection = db.collection("judges")


async function juegosVotados(id) {
  return votosServices.juegosVotados(id)
  
}


async function emitirVoto(data){
  return votosServices.almacenarVoto(data)
}


export default{
  juegosVotados,
  emitirVoto
}
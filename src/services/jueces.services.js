import { MongoClient, ObjectId } from 'mongodb'
import votosServices from "./votos.services.js"

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH_PARCIAL1")
const juecesCollection = db.collection("judges")


async function juegosVotados(id) {
  return votosServices.juegosVotados(id)
  
}


async function emitirVoto(data){
  return votosServices.almacenarVoto(data)
}

async function juezExiste(id) {
  await cliente.connect()
  return  await juecesCollection.findOne({ _id: new ObjectId(id) })
}

export default{
  juegosVotados,
  emitirVoto,
  juezExiste
}
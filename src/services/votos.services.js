import { MongoClient, ObjectId } from 'mongodb'

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH_PARCIAL1")
const votesCollection = db.collection("votes")

/**
 * Obtiene mediante el id de un juez, los juegos que fueron que fueron votados 
 * @param {*} id 
 * @returns []
 */
async function juegosVotados(id) {
  await cliente.connect()
  const lista = await votesCollection.find({"juez_id": id}).toArray()
  return lista
}

/**
 * recibe un voto lo guarda en la DB y lo retorna con id
 * @param {*} data 
 * @returns {} 
 */
async function almacenarVoto(data){
  await cliente.connect()
  const voto = { "_id": new ObjectId() , ...data}
  return await votesCollection.insertOne(voto)
}


export default{
  juegosVotados,
  almacenarVoto
}
import { MongoClient, ObjectId } from 'mongodb'

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH_PARCIAL1")
const votesCollection = db.collection("votes")

function filterQueryToMongo(filter) {
  const filterMongo = {}

  for (const filed in filter) {
    if (isNaN(filter[filed])) {
      filterMongo[filed] = filter[filed]
    }
    else {
      const [field, op] = filed.split('_')

      if (!op) {
        filterMongo[filed] = parseInt(filter[filed])
      }
      else {
        if (op === 'juez_id') {
          filterMongo[field] = {
            $gte: parseInt(filter[filed])
          }
        }
        else if (op === 'juez_id') {
          filterMongo[field] = {
            $lte: parseInt(filter[filed])
          }
        }
      }
    }
  }

  return filterMongo
}


/**
 * 
 * @param {*} id 
 * @returns []
 */
async function juegosPor(filtro = {}) {
  await cliente.connect()
  const filtroAplicado = filterQueryToMongo(filtro)

  const lista = await votesCollection.find(filtroAplicado).toArray()
  return lista
}

/**
 * Obtiene mediante el id de un juez, los juegos que voto
 * @param {*} id 
 * @returns []
 */
async function juegosVotados(id) {
  await cliente.connect()
  const lista = await votesCollection.find({"juez_id": id}).toArray()
  return lista
}

/**
 * Obtiene mediante el id de un juego, los juegos que fueron votados 
 * @param {*} id 
 * @returns []
 */
async function juegosPorId(id) {
  await cliente.connect()
  const lista = await votesCollection.find({"juego_id": id}).toArray()
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
  almacenarVoto,
  juegosPorId
}
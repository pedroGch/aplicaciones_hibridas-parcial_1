import { MongoClient, ObjectId } from 'mongodb'
import votosServices from "./votos.services.js"

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH_PARCIAL1")
const juegosCollection = db.collection("games")



async function juegosPorId(id) {
  await cliente.connect()
  return votosServices.juegosPorId(id)
  
} 

async function crearJuego(data) {
  await cliente.connect()
  const nuevoJuego = {"_id": new ObjectId() , ...data}
  await juegosCollection.insertOne(nuevoJuego)
  return nuevoJuego
}

async function editarJuego(id ,data) {
  await cliente.connect()
  return await juegosCollection.updateOne({_id: new ObjectId(id)}, {$set: {...data}})
}

async function borrarJuego(id) {
  await cliente.connect()
  return await juegosCollection.deleteOne({_id: new ObjectId(id)})
}

async function juegoExiste(id) {
  await cliente.connect()
  return  await juegosCollection.findOne({ _id: new ObjectId(id) })
}

async function juegosVotados(id) {
  return await votosServices.juegosVotados(id)
}

async function obtenerPorEdicion(edition, filter = {}) {
  const filterMongo = {"edition":  parseInt(edition)} 

  if (filter?.genre) {
    filterMongo.genre = filter.genre 
  }
  await cliente.connect()
  const lista = juegosCollection.find(filterMongo).sort({"total_score": -1}).toArray()
  return lista
}

async function actualizarScore (idjuego,total_score){
  let juego         = await juegoExiste(idjuego)
  juego.total_score = juego.total_score + total_score
  editarJuego(idjuego, juego)
}

export {
  juegosPorId,
  obtenerPorEdicion,
  crearJuego,
  editarJuego,
  borrarJuego,
  juegoExiste,
  juegosVotados,
  actualizarScore
}

export default{
  juegosPorId,
  obtenerPorEdicion,
  crearJuego,
  editarJuego,
  borrarJuego,
  juegoExiste,
  juegosVotados,
  actualizarScore
}
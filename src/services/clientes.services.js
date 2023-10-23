import { MongoClient, ObjectId } from 'mongodb'

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH20231CP1")
const ClientsCollection = db.collection('Clients')

function crearCliente() {
  return true
}

function todosLosClientes() {
  return true
}

function clientesPorId(id) {
  return true
}

function editarCliente(id){
  return true
}

function bajaCliente(id) {
  return true
}



export default{
  crearCliente,
  todosLosClientes,
  clientesPorId,
  editarCliente,
  bajaCliente
}
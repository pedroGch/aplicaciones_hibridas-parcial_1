import { MongoClient, ObjectId } from 'mongodb'

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH20231CP1")
const ClientsCollection = db.collection('Clients')

async function crearCliente(data) {
  await cliente.connect()
  const nuevoCliente = {"_id": new ObjectId() , ...data}
  await ClientsCollection.insertOne(nuevoCliente)
  return nuevoCliente
}

async function todosLosClientes() {
  await cliente.connect()
  const clientes = ClientsCollection.find().toArray()
  return clientes
}

async function clientesPorId(id) {
  await cliente.connect()
  return ClientsCollection.findOne({_id: new ObjectId(id)})
}

async function editarCliente(id, data){
  await cliente.connect()
  return await ClientsCollection.updateOne({_id: new ObjectId(id)}, {$set: {...data}})
}

async function bajaCliente(id) {
  await cliente.connect()
  return await ClientsCollection.deleteOne({_id: new ObjectId(id)})
}



export default{
  crearCliente,
  todosLosClientes,
  clientesPorId,
  editarCliente,
  bajaCliente
}
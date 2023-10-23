import clientesServices from "../services/clientes.services.js"

async function crearCliente(req, res) {

  const nuevoCliente = await clientesServices.crearCliente(req.body)
  if (nuevoCliente){
    res.status(200).json(nuevoCliente)
  }else{
    res.status(500).send('error del servidor')
  }
}

function todosLosClientes(req,res) {
  clientesServices.todosLosClientes()
    .then(function (clientes) {
      res.status(200).json(clientes)
    })
    .catch( error => {
      res.status(500).send('error del sevidor')
    })
}

function clientesPorId(req,res) {
  clientesServices.clientesPorId(req.params.id)
    .then(function (clientes) {
      res.status(200).json(clientes)
    })
    .catch( error => {
      res.status(500).send('error del sevidor')
    })
}

function editarCliente(req,res){
  clientesServices.editarCliente(req.params.id, req.body)
  .then( (respuesta) => {
    if (respuesta) {
      res.status(200).json(respuesta)
    }else{
      res.status(404).send('recurso no encontrado')
    }
  })
  .catch((error) => {
    res.status(500).send('error: ' + error)
  })
}

function bajaCliente(req,res) {
  clientesServices.bajaCliente(req.params.id)
  .then( (respuesta) => {
    if (respuesta) {
      res.status(200).json(respuesta)
    }else{
      res.status(404).send('recurso no encontrado')
    }
  })
  .catch((error) => {
    res.status(500).send('error: ' + error)
  })
}



export default{
  crearCliente,
  todosLosClientes,
  clientesPorId,
  editarCliente,
  bajaCliente
}
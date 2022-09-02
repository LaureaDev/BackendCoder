const express = require('express')
const { Router } = express

const ContenedorArchivo = require('./contenedores/ContenedorArchivo.js')

const app = express()

const productosApi = new ContenedorArchivo('../dbProductos.json')
const carritosApi = new ContenedorArchivo('../dbCarritos.json')


const esAdmin = true

function crearErrorNoEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin())
    } else {
        next()
    }
}


const productosRouter = new Router()

productosRouter.post('/', soloAdmins, async (req, res) => {
    const x = await productosApi.guardar(req.body);
    res.json(x);
})
productosRouter.get('/', async(req, res)=>{
    const x = await productosApi.listarAll();
    res.json(x)
})
productosRouter.put('/:id', soloAdmins, async(req, res)=>{
    const id = parseInt(req.params.id);
    const obj = req.body;
    const x = await productosApi.actualizar(obj, id);
    res.json(x);

})
productosRouter.get('/:id', soloAdmins, async(req, res)=>{
    const id = parseInt(req.params.id);
    const respuesta = await productosApi.listar(id);
    respuesta ? res.json(respuesta) : res.status(404).send();
})
productosRouter.delete('/:id', soloAdmins, async(req, res)=>{
    const id = parseInt(req.params.id);
    const x = await productosApi.borrar(id);
    res.json(x);
})


const carritosRouter = new Router()

carritosRouter.post('/', async(req, res)=>{
    const x = await carritosApi.guardar(req.body);
    res.json(x)
})
carritosRouter.delete('/:id', async(req, res)=>{
    const id = parseInt(req.params.id);
    const x = await carritosApi.borrar(id);
    res.json(x);
})

carritosRouter.post('/:id/productos', async(req, res)=>{
    const id = parseInt(req.params.id);
    const obj = req.body;
    const x = await carritosApi.actualizar(obj, id);  
    res.json(x);
})

carritosRouter.get('/:id/productos', async(req, res)=>{
    const id = parseInt(req.params.id);
    const x = await carritosApi.listar(id); 
    res.json(x.productos); 
})

carritosRouter.delete('/:id/productos/:id_prod', async(req, res)=>{
    const id = parseInt(req.params.id);
    const proId = parseInt(req.params.id_prod);
    const x = await carritosApi.borrarProducto(id, proId);
    res.json(x);
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

module.exports = app
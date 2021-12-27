const express = require('express')
const router = express.Router()

const app = express()
app.use(express.json())


let messageError = {
    error: -1,
    description: "permiso denegado, necesita ser administrador"
}


const product = require("../daos/index").productosDaos;


// Get
router.get('/', async (req, res) => {
    console.log("I'm inside!")
    console.log(product)
    let productos = await product.getAll()
    res.send(productos)
})

router.get('/:id', async (req, res) => {
    res.send(await product.getById(req.params.id))
})

// Post
router.post('/', async (req, res) => {
    // console.log(req.originalUrl)
    console.log(req.query)
    if(req.query.admin == "admin") {
        await product.save(req.body)
        res.send("El producto se guardó correctamente")
    } else {
        res.send(messageError)
    }
})

// Put
router.put('/:id', async (req, res) => {
    if(req.query.admin == "admin") {
        await product.update(req.params.id, req.body)
        res.send("Producto actualizado!")
    } else {
        res.send(messageError)
    }
})

// Delete 
router.delete('/:id', async (req, res) => {
    if(req.query.admin == "admin") {
        await product.deleteById(req.params.id)
        res.send("Producto removido correctamente!")
    } else {
        res.send(messageError)
    }
})

module.exports = router;
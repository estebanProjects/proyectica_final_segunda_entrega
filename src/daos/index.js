let productosDaos
let carritosDaos

const db = "firebase"

switch(db) {
    case "file":
        const ProductosFs = require('./productos/productosDaosFile')
        const CarritosFs = require('./carritos/carritosDaosFile')

        productosDaos = new ProductosFs("./src/data/productos.txt")
        carritosDaos = new CarritosFs("./src/data/carritos.txt")

        break;
    
    case "firebase":
        const ProductosFirebase = require('./productos/productosDaosFirebase')
        const CarritosFirebase = require('./carritos/carritosDaosFirebase')

        productosDaos = new ProductosFirebase()
        carritosDaos = new CarritosFirebase()

        break;
}

module.exports = { productosDaos, carritosDaos }
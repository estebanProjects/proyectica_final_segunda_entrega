let productosDaos
let carritosDaos

const db = "file"

switch(db) {
    case "file":
        const ProductosFs = require('./productos/productosDaosFile')
        const CarritosFs = require('./carritos/carritosDaosFile')

        productosDaos = new ProductosFs("./src/data/productos.txt")
        carritosDaos = new CarritosFs("./src/data/carritos.txt")

        break;
}

module.exports = { productosDaos, carritosDaos }
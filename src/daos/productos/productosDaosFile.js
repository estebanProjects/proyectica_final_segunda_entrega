const Archivo = require("../../containers/productos");

class ProductDaosFs extends Archivo {
  constructor(fileNam) {
    super(fileNam);
  }
}

module.exports = ProductDaosFs;
const Firebase = require("../../containers/firebase");

class CarritoDaoFirebase extends Firebase {
    constructor() {
      super("Carrito");
    }
  
    async save(obj) {
      return super.save(obj);
    }
  
    async update(obj) {
      const products = await this.collection.doc(obj.id).set(obj);
      return products;
    }
  
    async getProducts(id) {
      const carrito = await this.getById(id);
      return carrito.product;
    }
  
    async deleteProduct(id, idProduct) {
      const carrito = await this.getById(id);
      const index = carrito.product.findIndex((o) => o.id == idProduct);
      if (index != -1) {
        carrito.product.splice(index, 1);
        this.update(carrito);
      }
    }
  }
  
  module.exports = CarritoDaoFirebase;
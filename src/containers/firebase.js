var admin = require("firebase-admin");

var serviceAccount = require("../config");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount.firebase),
  databaseUrl: "http://ecommerce-backend.firebaseio.com"
});

console.log("firebase contectado")

const db = admin.firestore()

class Contenedor {
    constructor(collection) {
      this.collection = db.collection(collection);
    }
  
    async save(obj) {
      await this.collection.add(obj);
    }
  
    async getById(id) {
      let doc = await this.collection.doc(id).get();
      const data = doc.data();
      return { ...data, id };
    }
  
    async getAll() {
      let result = [];
      let snapshot = await this.collection.get();
      snapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      return result;
    }
  
    async update(id, obj) {
      const actualizado = await this.collection.doc(id).set(obj);
      return actualizado;
    }
  
    async deleteById(id) {
      const product = await this.collection.doc(id).delete();
      return product;
    }
  }
  
  module.exports = Contenedor;

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());

// rutas
const productos = require('./routes/productos')
app.use('/api/productos', productos)

const carritos = require('./routes/carritos')
app.use('/api/carritos', carritos)

// Prueba 
app.get('/', async(req, res) => {
    res.send("!Bienvenido a mi proyecto! !Pruebe las rutas en Postman!")
})

app.listen(port, () => {
    console.log("Server running on port", port);
});
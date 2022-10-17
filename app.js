const express = require("express")
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config()

const port = process.env.PORT || 3000



//Conexión a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.kesyhsa.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri)

    .then(() => console.log("conexión exitosa"))
    .catch(e => console.log(e))


//motor de plantillas
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")


app.use(express.static(__dirname + "/public"))

// Rutas web
app.use("/", require("./router/rutas")) //las rutas
app.use("/mascotas", require("./router/Mascotas"))

//Ruta 404
app.use((req, res, next) => {
    res.status(404).render("404")
})

app.listen(port, () => {
    console.log("servidor en el puerto: " + port);
})
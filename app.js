const express = require("express")
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');


const port = process.env.PORT || 3000

//Conexión a base de datos
const mongoose = require('mongoose');

const user = "drdelarosa"
const password = "3YF5RORu10qyBg4Q"
const db = "veterinaria"
const uri = `mongodb+srv://${user}:${password}@cluster0.kesyhsa.mongodb.net/?retryWrites=true&w=majority`


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
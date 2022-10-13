const express = require("express")
const app = express()

const port = process.env.PORT || 3000

//motor de plantillas
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")


app.use(express.static(__dirname + "/public"))

// Rutas web
app.use("/", require("./router/rutas")) //las rutas

app.use((req, res, next) => {
    res.status(404).render("404")
})

app.listen(port, () => {
    console.log("servidor en el puerto: " + port);
})
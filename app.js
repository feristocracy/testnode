const express = require("express")
const app = express()

const port = 3000

//motor de plantillas
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")


app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.render("index", {titulo: "mi titulo de dinamicos"})
})

app.get("/servicios", (req, res) => {
    res.render("servicios", {tituloServs: "este es mensaje de servicios dinamicos"})
})

app.use((req, res, next) => {
    res.status(404).render("404")
})







app.listen(port, () => {
    console.log(__dirname);
})
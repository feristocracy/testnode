const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {titulo: "mi titulo de dinamicos"})
})

router.get("/servicios", (req, res) => {
    res.render("servicios", {tituloServs: "este es mensaje de servicios dinamicos"})
})

module.exports = router
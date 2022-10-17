const express = require("express")
const router = express.Router()

const Mascota = require("../models/mascota")

router.get("/", async (req, res) => {

    try {
        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB);
        res.render("mascotas", {
            arrayMascotas: arrayMascotasDB
        })

    } catch (error) {
        console.log(error);

    }

    

})

router.get("/crear", (req, res) => {
    res.render("crear")
})

router.post("/", async (req, res) => {
    const body = req.body
    try {
        const mascotaDB = new Mascota(body)
        await mascotaDB.save()

        //tambien puede ser: await Mascota.create(body)

        res.redirect("./mascotas")
    } catch (error) {
        console.log();
    }
})

router.get("/:id", async(req, res) => {

    const id = req.params.id

    try {
        const mascotaDB = await Mascota.findOne({ _id: id })  

        res.render("detalle", {
            mascota: mascotaDB,
            error: false
        })

    } catch (error) {
        console.log(error);
        res.render("detalle", {
            error: true,
            mensaje: "no se encuentra ese ID"
        })
    }
})

router.delete("/:id", async(req, res) => {
    const id = req.params.id

    try {
        const mascotaDB = await Mascota.findByIdAndDelete({_id : id})

        if (mascotaDB) {
            res.json({
                estado: true,
                mensaje: "eliminado"
            })
        } else {
            res.json({
                estado: false,
                mensaje: "hubo un error no se pudo eliminar!"
            })
        }
    } catch (error) {
        console.log(error);
    }
})

router.put("/:id", async(req, res) => {
    const id = req.params.id
    const body = req.body

    try {
        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false})

        res.json({
            estado: true,
            mensaje: "editado"
        })

    } catch (error) {
        console.log(error);

        res.json({
            estado: false,
            mensaje: "Failed"
        })
    }
})

module.exports = router
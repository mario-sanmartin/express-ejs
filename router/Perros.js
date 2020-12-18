const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')

router.get('/', async (req,res)=>{

    try {
        const arrayMascotaDB = await Mascota.find()
        console.log(arrayMascotaDB);
        
        res.render("mascotas",{
            arrayMascotas : arrayMascotaDB,
            // arrayMascotas:[
            //     {id:1,nombre:"Blue",descripcion:"El chancho supremo"},
            //     {id:2,nombre:"Luna",descripcion:"La mas fiel de todos"},
            //     {id:3,nombre:"Atom",descripcion:"El Natre,alias el chompiras"},
            //     {id:4,nombre:"Sauroncito",descripcion:"El chanchito bebe"}
            // ],
            titulo: "Puercos y Chanchos"
        })

    } catch (error) {
        console.log(error);
    }

})

module.exports = router;
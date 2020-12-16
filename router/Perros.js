const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render("mascotas",{
        arrayMascotas:[
            {id:1,nombre:"Blue",descripcion:"El chancho supremo"},
            {id:2,nombre:"Luna",descripcion:"La mas fiel de todos"},
            {id:3,nombre:"Atom",descripcion:"El Natre,alias el chompiras"},
            {id:4,nombre:"Sauroncito",descripcion:"El chanchito bebe"},

        ],
        titulo: "Puercos y Chanchos"
    })
})

module.exports = router;
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

router.get('/crear',(req,res)=>{
    res.render('crear')
})

router.post('/',async(req,res)=>{
    const body = req.body
    try {
        const mascotaDB = new Mascota (body) //contruimos una nueva mascota
        await mascotaDB.save()
        // console.log('Mascota Creada Nazi ',mascotaDB);
        res.redirect('/mascotas')
    } catch (error) {
        console.log(e);
    }
})


module.exports = router;
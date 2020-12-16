const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    // console.log(__dirname);
    // res.send('Pero que chucha')
    res.render("index",{titutilo:"Sauron con 2 meses"})
})

router.get('/info',(req,res)=>{
    res.render("info",{
        titulo: "Información",
        info: "Sauron el señor Oscuro"
    })
})

router.get('/biografia',(req,res)=>{
    res.render("biografia",{titulo: "Sauroncito"})
})

module.exports = router;
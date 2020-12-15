const express = require('express');
const app = express();

const port = 3000;

app.set("view engine","ejs");
app.set("views",__dirname + "/views");

app.use(express.static(__dirname + '/public'))
app.get('/',(req,res)=>{
    // console.log(__dirname);
    // res.send('Pero que chucha')
    res.render("index",{titutilo:"Pero que chucha"})
})

app.get('/info',(req,res)=>{
    res.render("info",{titulo: "Informacion"})
})

app.get('/servicios',(req,res)=>{
    res.send('Estas en servicios')
})

app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo: "404",
        descripcion:"Pero que chuuuu"
    })
})

app.listen(port,()=>{
    console.log('Nazi Server',port)
})
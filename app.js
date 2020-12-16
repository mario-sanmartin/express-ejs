const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine","ejs");
app.set("views",__dirname + "/views");

app.use(express.static(__dirname + '/public'))

//Rutas de la app
app.use('/',require('./router/rutas'))

//si tiene la palabra "use" estamos usando un middleware de express
app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo: "404",
        descripcion:"Pero que chuuuu"
    })
})

app.listen(port,()=>{
    console.log('Nazi Server',port)
})
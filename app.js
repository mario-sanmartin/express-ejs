const express = require('express');
const bodyParser =require('body-parser');
const app = express();

//para procesar formularios
app.use(bodyParser.urlencoded({ extended: false}))

//datos json
app.use(bodyParser.json())


//variables de entorno
require('dotenv').config();

const port = process.env.PORT || 3000;

//Conexion a Bd
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.dp29x.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    { useNewUrlParser:true,useUnifiedTopology:true}
    )
    .then(()=> console.log('bd Ready twenty fuor hours my lord'))
    .catch(e => console.log(e))



app.set("view engine","ejs");
app.set("views",__dirname + "/views");

app.use(express.static(__dirname + '/public'))

//Rutas de la app
app.use('/',require('./router/Rutas'))
app.use('/mascotas',require('./router/Perros'))

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
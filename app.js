const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//Conexion a Bd
const mongoose = require('mongoose');

const user = 'sauron';
const password = 'G1G1hDdDvW7M4YaA';
const db = 'personal';
const uri = `mongodb+srv://${user}:${password}@cluster0.dp29x.mongodb.net/${db}?retryWrites=true&w=majority`;

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
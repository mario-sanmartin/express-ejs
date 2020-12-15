const express = require('express');
const app = express();

const port = 3000;

app.use(express.static(__dirname + '/public'))
app.get('/',(req,res)=>{
    // console.log(__dirname);
    res.send('Pero que chucha')
})

app.get('/servicios',(req,res)=>{
    res.send('Estas en servicios')
})

app.get('/servicios',(req,res)=>{
    res.send('Estas en servicios')
})

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(port,()=>{
    console.log('Nazi Server',port)
})
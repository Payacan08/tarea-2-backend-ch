const Contenedor = require('./contenedor.js');
const express = require('express');
const app = express();

const contenedor = new Contenedor('productos');

const server = app.listen(8080,()=>{
    console.log('esto esta funcionando');
})

server.on("error",error=> console.log(`Error en servidor ${error}`))

app.get('/',(req,res)=>{
    res.send({mensaje: 'holaaaaaaaaaaaaaaaaaaaaaaaaa'});
})

app.get('/productos',(req,res)=>{
    res.send(contenedor.getAll());
})

app.get('/productoRandom',(req,res)=>{
    res.send(contenedor.randomObj());
})

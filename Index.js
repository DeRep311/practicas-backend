
//Requerimientos
const express = require('express');
const app =express();
const {router}= require('./src/Routes/indexRoutes.js')


const PORT= 8080;
app.listen(PORT,()=>{
    console.log("El server escucha");
})
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api',require('./src/Routes/indexRoutes.js'));



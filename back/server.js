const express=require('express');
const app= express();
const cors= require('cors');
const rota = require('./src/rotas/logs.js');


app.use(cors());
app.use(express.json())

// Realização da criação de rotas
app.get('/',cors(), (req, res)=>{
   try{
       rota(req, res)
   }catch(error){
       console.log(`Ocorreu um erro na solicitação dos dados: ${error}`)
   }
})

module.exports=app
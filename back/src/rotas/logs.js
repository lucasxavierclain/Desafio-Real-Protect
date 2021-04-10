require('../models/Dados')
const mongoose=require('mongoose')
const Dados=mongoose.model('dados');
require('../database/connect')

// Função para encontrar os dados e retornar 
async function rota(req, res){
    const todosDados= await Dados.find()
    const todosDadosJson= await todosDados;
    return res.json(todosDadosJson)
}

module.exports=rota;
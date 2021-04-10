const mongoose=require('mongoose');
const Schema=mongoose.Schema

const Dados= new Schema({
    msg:{
        type:String 
    },
    year:{
        type:String 
    },
    month:{
        type:String 
    },
    day:{
        type:String 
    },
    hour:{
        type:String 
    }
})
mongoose.model('dados', Dados)
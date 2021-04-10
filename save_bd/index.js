const lineReader = require('line-reader');
const mongoose = require('mongoose')
require('./src/models/Dados');
const Dados = mongoose.model('dados')
require('./src/database/connect');

async function arquivo() {
    //Para usar o arquivo original log é só colocar o caminho "./src/logger/auth.log", mas vai demorar mais para carregar
    lineReader.eachLine('./src/logger/teste.log', (line) => {
        const texto = line.split(' ').filter(value => value != "")
        const msg = texto.slice(3, -1).join(' ')
        try {
            // Realizando o salvamento dos dados e caso ocorra um erro será disparada uma mensagem
            const novosDados = new Dados({
                msg: msg,
                year: '2020',
                month: texto[0],
                day: texto[1],
                hour: texto[2]
            })

            novosDados.save()
            console.log("Dados salvos")

        } catch (error) {
            console.log(`Erro ao salvar: ${error}`)
        }
    })

}

arquivo()




const { error } = require('console')
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

//fs.readFile


async function buscarArquivo(){
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoArquivo = arquivo.toString('utf8')
        console.log(textoArquivo)
    } catch (error) {
        console.log('deu erro', error)
    }
    finally {
        console.log('acabou')
    }
}

buscarArquivo()
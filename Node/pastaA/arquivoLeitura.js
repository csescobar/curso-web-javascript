const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})
//sincrono..
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


const config = require('./arquivo.json')
console.log(config.db)
//operador new sempre usamos  em cima de uma constructor function

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log(`meu nome é ${this.nome}`)
}

const renan = new Pessoa('Renan', 30)
// const renan = {
//     genero: 'masculino'
// }

// //outra maneira de usar o new sem usar o new
// Pessoa.call(renan, 'renan', 30)

console.log(renan)

renan.falar()
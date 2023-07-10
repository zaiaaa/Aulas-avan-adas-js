/*
    boolean
    null
    undefined
    number
    string
    symbol
*/

// Object

// true false 

// const nome = ''

// if (nome) {
//     console.log('preenchido')
// }else {
//     console.log('otario')
// }
//console.log(!!0)


//o null representa falta de valor
// const x = null
// console.log(x)

// //O undefined representa uma ausência de declaração
// let y 
// console.log(y)

//Synbol

//Symbol gera uma instância e valor unicos
// const x = Symbol('10')
// const y = x
// console.log(x == y)
  
//objeto
//this se refere a um elemento dentro do escopo
const pessoa = {
    nome: "Renan",
    idade: 30,
    falar: function() {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}
// pessoa['nome'] = 'Jose'
pessoa.sobrenome = 'Johannsen de Paula'
// pessoa.falar = () => console.log('Teste')
pessoa.falar()

const y = pessoa.falar
y()
//fica undefined pq o objeto perde a referência "this" quando atribuido nessa constante


// console.log(pessoa.nome)
// console.log(pessoa['nome'])











// //Protótipo é uma base pro objeto, é algo em que o objeto se baseia
// const pessoa ={
//     genero: 'masculino'
// }

// const renan = {
//     nome: 'Renan',
//     idade: 30,
//     __proto__: pessoa
//     //Isso seria uma herança em JS
// }
// // pessoa.genero = 'masculino'
// console.log(renan.genero)


function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function (){
    console.log(`Meu nome é ${this.nome}`)
}
const renan = new Pessoa('Renan', 30)
renan.falar()

new Pessoa() //dá uma nova pessoa a classe


//é a mesma coisa que o de cima
class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const pessoa = {
    genero: 'masculino'
}

// const renan = {
//     nome: 'Renan',
//     //__proto__: pessoa
// }
//não podemos ter 2 metodos iguais com valores diferentes

const renan = Object.create(pessoa)
renan.nome = 'Renan'

console.log(renan.genero)


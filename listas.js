
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//--------------------------JOIN-------------------
    console.log(lista.join('/'))
//-------------------REDUCE-----------------
const somaDeTudo = lista.reduce((previous, current) => {
    //console.log(previous, current)
    return previous + current
}, 0)

//console.log(somaDeTudo)
//----------------FILTER-----------------
const listaDeNumPar = lista.filter((element) => {
    return (element % 2 === 0)
})

//console.log(listaDeNumPar)

//------------------FOREACH---------------
const cb = (value, i) => {
    console.log(value, i)
}

listaDeNumPar.forEach(cb)

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    //console.log(element)
}

//------------------MAP------------------

class Pessoa{
    constructor(name){
        this.name = name 
    }
}

//Lista com objetos instanciados
const listaPessoa = [new Pessoa('Renan'), new Pessoa('Andresa'), new Pessoa('Vitor'), new Pessoa('José')]

//lista com objetos literais
const listaPessoaLiteral = [{ nome: 'Renan'}, { nome: 'Andresa'}, { nome: 'Amanda'}]


//Filtra na lista literal on nomes que começam com A
const nomesComA = listaPessoaLiteral.map(e => e.nome)
                    .filter((e) => e.startsWith('A'))
                        .join(', ')

console.log(nomesComA)

//Filtra na lista literal on nomes que começam com A e transforma em html
const elementInHTML = listaPessoaLiteral.filter((e) => e.nome.startsWith('A')).map(e => `<li>${e.nome}</li>`).join('')
console.log(elementInHTML)


const ListaNomes = listaPessoa.map((element) => element.name).join(', ')

console.log(ListaNomes)
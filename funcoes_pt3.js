
const pessoa = {
    nome: 'Renan',
    idade: 30
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

//gritar('olaaaaa') imprime undefined como nome pois não tem a base, a referência ao objeto pessoa
gritar('olaaaaa')

gritar.apply(pessoa, ['Olaaaaaaaaaaaaaaa'])
gritar.call(pessoa, 'olaaaaaaaaaaa') 





const animal = {
    nome: 'tobias',
    idade: 2,
    sussurrar: function sussurrar(par){
        console.log(par, this.nome)
    }
}

animal.sussurrar("shhhhhh")
//CLOSURES
// uma closure é quando a função se lembra do contexto onde ela foi declarada

function soma(x){
    return function(y){
        return x + y
//tambem poderiamos usar uma arrow function invés da declarada
//como podemos ver, 'x' foi guardado, ele é da função pai e mesmo assim conseguimos acessá-la
    
    }
}
const metadeDaSoma = soma(10)

console.log(metadeDaSoma(20))
console.log(metadeDaSoma(30))
console.log(metadeDaSoma(40))


//ARROW FUNCTIONS
// function funcao1(){
//     console.log(this)
// }
//uma arrow function nao tem contexto, não tem um this

// const funcao2 = () => {
//     console.log(this)
// }


// const renan = {
//     nome: 'Renan',
//     funcao1,
//     funcao2
// }

// renan.funcao1()
// renan.funcao2()
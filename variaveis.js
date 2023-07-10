// //Sobre o VAR
// //O var vaza dos blocos de código (escopos)

// if(true){
//     var var1 = 10;
// }
// console.log(var1)
// //O código funciona normalmente por causa do hoisting

//o VAR só se restringe a funções, não vaza em funções
// function teste5(){
//     var var4 = 10
// } 
// teste5()
// console.log(var4)


//Sobre o LET
//O let não vaza escopos

if(true){
    let var1 = 10;
}
console.log(var1)
//Imprime erro, pois não vaza escopo


//Sobre o const, é a mesma coisa que o let, a diferença é que o valor é constante





//---------------VARIÁVEIS----------------------
// var var1
// let var2
// const var3 = 1
//------------------------------------------------

// -------------HOISTING-------------------


//Hoisting (içamento [de levantar, puxar algo])
// teste();

// function teste(){
//     console.log("teste")
// }
// //Isso é o hoisting, a gente chama a função antes de ser declarada e ela funciona mesmo assim



// //Com variáveis o hoisting se comporta de maneira diferente

// teste2()

// var teste2 = () =>{
//     console.log("teste2")
// }

//o JS iça, puxa a variável pra cima, mas sem o valor portanto é diferente de uma function


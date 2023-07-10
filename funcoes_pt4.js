//Callbacks

function adicao(x, y){
    return x+y
}
function mult(x, y){
    return x*y
}


function calc(x, opc, y) {
    console.log(opc(x, y))
}

calc(10, mult, 20)
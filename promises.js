

const promessaDeNumeroRandom = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000);
})

console.log("vai filhão")

promessaDeNumeroRandom.then((value) => {
    console.log(value)
    return value + 10
}).then((value) => {
    console.log(value)
})
.catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("finalizou")
})

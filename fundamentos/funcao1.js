// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}
// Achei estranho que pode jogar a funcao e depois pode colocar o valor
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2 , 15, 5, 6, 7, 8)
imprimirSoma()                          

// Funcao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2 , 3))
console.log(soma(2))
console.log(soma())
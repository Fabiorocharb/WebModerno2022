function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2   // || significa OU
    const comprarTv50 = trabalho1 && trabalho2   // &&  íiii
    //const comprarTV32 = !!(trabalho1 ^ trabalho2)  //Bitwise Xor
    const ComprarTV32 = trabalho1 != trabalho2
    const materSaudavel = !comprarSorvete  //Operador Unário

    return { comprarSorvete, comprarTv50, ComprarTV32, materSaudavel }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))
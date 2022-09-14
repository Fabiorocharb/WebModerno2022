const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
//charAt mostra a letra com o número colocado
console.log(escola.charCodeAt(3));
//CharCodeAt pega o valor dentro do codigo
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
// Imprimi de trás para frente.
console.log(escola.substring(0, 3));
// vai do indice 0 a 3
console.log('Escola ' .concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));
// replace substiu o numero pela letra

console.log('Ana,Maria,Pedro'.split(','));
//split serve para separação
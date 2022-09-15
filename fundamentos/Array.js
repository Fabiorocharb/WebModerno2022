console.log('Regra para o array, usar [] . ,');
console.log('Sempre começa com o numero 0.');
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores); 
console.log(valores.length);//length significa quantos elementos.

valores.push({id: 3}, false, null, 'teste'); //Para adicionar novos elementos.
console.log(valores);

console.log(valores.pop()); //Retira o ultimo valor do array
delete valores[0];
console.log(valores);

console.log(typeof valores);
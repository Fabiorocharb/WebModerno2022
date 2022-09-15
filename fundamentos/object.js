const prod1 = {}; //O par de chave receber um objeto
prod1.nome = 'Celular Xiaomi'; 
prod1.preco = 4998.90;  // Objeto é uma coleção de chave e valores
prod1['Desconto Legal'] = 0.40; // evitar atributos com espaço

console.log(prod1);

let prod2 = {};
prod2.nome = 'Iphone 14';
prod2.preco = 13499.90;
prod2['Com Desconto'] = 0.50;

console.log(prod2);

const prod3 = {
    nome: 'Camisa Polo',
    preco: 89.90   
}
console.log(prod3);

var prod4 = {
    nome: 'Curso de web',    // nunca esquecer da virgula
    valor: 59.90
}
console.log(prod4);
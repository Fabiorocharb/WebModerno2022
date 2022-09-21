// Novo recurso do ES2015

const pessoa = {
    nome: 'Fabio',
    idade: 30,
    endereco: {
        logradouro: 'Rua ACC',          // importante usar a , 
        numero: 1000
    }
}

const { nome, idade } = pessoa  //tire de dentro do objeto
console.log(nome, idade)

const { nome : n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, Rocha = true} = pessoa
console.log(sobrenome, Rocha)

const {endereco : {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)
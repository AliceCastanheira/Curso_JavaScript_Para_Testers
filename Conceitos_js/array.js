// Array - Lista de dados
// Separa os valores por virgula
// baseado por indice - 0, 1, 2, 3 ...
const paises = ['Brasil', 'Argentina', 'Alemanha']

// acessando uma posição do array
// Para concatenar usar o + oi ,
console.log('Acessando o país: ' + paises[0])

// acessando o tamanho do array
console.log('Tamanho do array: ', paises.length)

//Oparações com array

// Usamos o push para adicionar itens ao final do array
paises.push('USA', "Inglaterra")

// usado para remover o ultimo item da listas
paises.pop()

// Usado para adicionar item no começo do array
paises.unshift("França")

// Usado para remover o item no começo do array
paises.shift()

console.log('Acessando o país: ' + paises)

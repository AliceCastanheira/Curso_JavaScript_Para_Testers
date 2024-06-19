// Estrutura de decisão/ condição if / else

// Se - if
// Se não - else

// Para igual devemos usar dois = (==)
// Sempre que tiver essa condição vai se tornar verdadeiro ou falso
// Exemplo de comparação de strings
const nome = "Eduardo"

// Vai retornar como true our false
console.log(nome == "Eduardo")

if (nome == "eduardo"){
    console.log("condição atendida")
} else {
    console.log("condição não atendida")
}

// Ao usar numeros temos mais possibilidade, usando o < >  ==(Igual) !=(Diferente)
let idade = 50 

if (idada => 30) {
    console.log("Velho")
} else {
    console.log("Novo")
}

// Exercicios
// 1 Faça um programa que peça dois números e verifique (usando if e else) e imprima o maior deles  
var numero1 = 1
var numero2 = 2

if (numero1 > numero2) {
    console.log("O maior numero é " + numero1)
} else {
    console.log("O menor numero é " + numero2)
}
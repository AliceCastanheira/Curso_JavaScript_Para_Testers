// Função/método: bloco de código que deve vai ser executado 
// Uma função precisa chamada
//Pode ou não receber parâmetros
// Pode ou não retonar dados ou qualquer outra coisa ou não

// Por padrão, ao dar o nome da função devemos colocar a primeira legra minuscula
// Inicialmente quando criamos essa função ela não retomava nada no console isso se dá ao fato dela não está sendo chamada
// Nós apenas a construímos
// Criação da função
function gerarNome(nome, sobrenome, idade){
    console.log("Nome completo: ", nome + sobrenome)
    console.log("Idade: ", idade)
}

// Chamando a função
// Podemos adicionar parametros inserindo os dados nos parantese e separando por virgula
gerarNome("Carlos", " Castanheira", 50) 

// Função usando o return
function gerarNome(nome, sobrenome){
    return "Nome completo: " + nome + sobrenome
}

// Podemos armezar dados dentro de uma váriasvel e utilizar onde quisermos 
const nomeGerado= gerarNome("Carlos", " Castanheira")
console.log(nomeGerado)
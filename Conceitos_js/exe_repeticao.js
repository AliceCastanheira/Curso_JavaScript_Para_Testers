// exercicio 1 - Estrutura de repeticao 

// percorrer uma lista de nome, contendo os nomes:
// Eduardo, Maria, João e Francisco
// Mostrar o numero da excucão, comecando por 1 
// nome que está sendo executado 
// separados 

//Exemplo: Execucao 1; nome:, divisor (-----------)

// Fiz das duas maneiras que foram ensidas

// Váriavel com os valores, no caso dos "nome"
const nomes = ["Eduardo", "Maria", "João", "Francisco"]

// Primeira estrutura de repeticao
for (indice = 0; indice < nomes.length; indice++) {
    
    // Fiz essa estrutura com o log completo apenas adicionando os valores
    // Exibir o nome de acordo com o indice desejado
    // Exibir o número de acordo com o indice executado
    console.log("Nome: " + nomes[indice] + ", executando o número: ", indice + 1)
    
    // Log para o separador
    console.log("------------------")
}

// Segunda estrutura de repetição
nomes.forEach((elementos, indice) =>{
    
    // Exibir o nome de acordo com o indice desejado
    console.log("Nome: " + elementos)

    // Exibir o número de acordo com o indice executado
    console.log("Executando o número: ", indice + 1 )

    // Log para o separador
    console.log("----------")

})
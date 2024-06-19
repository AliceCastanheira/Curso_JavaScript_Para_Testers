// Exercicio 2 - Estrutura de decisão

// percorrer uma lista de cidade 
// COntendo: ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']
// Para cade item, verificar se a cidade florianóplois está presente na lista
// Printar o nome da cidade
// Caso esteja, avisar
//Casos não seja o elemento procurando, avisar
// Número da excução 

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']

cidades.forEach((elementos, indice) => {

    if (elementos == "Florianópolis"){
        console.log("Encontrado")
    } else {
        console.log("Não encontrado")
    }
    
    // Exibir o número de acordo com o indice executado
    console.log("Executando o número: " + indice)
    
    // Exibir o nome de acordo com o indice desejado
    console.log("Cidade: " + elementos)
    
    // Log para o separador
    console.log("----------")

});


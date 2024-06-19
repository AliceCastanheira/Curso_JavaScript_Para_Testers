// Estrutura de loop/repetição

// Repetição por array 
// forEach = para cada elemento do meu array ele vai excutar o código 

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']

// Explicando essa função: 
cidades.forEach((elementos, index) => {
    
    // Podemos ver através deste log que o array não executa de uma vez e sim um de cada vez, exemplificamos usando o index
    console.log("Execução número: " + index)
    
    // Exibir no log dos elementos
    console.log(elementos)
})


// Reptição por For

// ++ sempre vai acrescentar um numero, por exemplo: 0 vai executar e depois vai acrescentar 1, 
// agora 1 vai executar e depois vai acrescentar 2, e assim por diante
// Essa função vai ser executada até ela chegar ao menos 10
for (indice = 0; indice < cidades.length; indice++) {
    console.log(cidades[indice])
}
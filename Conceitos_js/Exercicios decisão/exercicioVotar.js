// 1 Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 
// uma	 pessoa	 e	escrever	 uma	 mensagem	 que	 diga	 se	 ela	 
//poderá	 ou	 não	 votar	 este	 ano	(não	é	necessário	considerar	o	mês	em	que	ela	nasceu). 

var idade = 69

if (idade == 16 || idade == 17) {
    console.log("Você pode votar mas não é obrigatório")
} else if (idade < 16){
    console.log("Você não possui a idade para votar")
} else if (idade >= 70) {
    console.log("Você pode votar maas não é obrigatório")
} else if (idade > 18) {
    console.log("É obrigatório que você vote")
} 

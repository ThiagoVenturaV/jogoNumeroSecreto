alert('Bem-Vindo ao jogo do número secreto!');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute = prompt('Escolha um múmero entre 1 e 10:');
console.log('valor do chute:',chute);
console.log('comparação:',chute==numeroSecreto);
//se o chute for igual ao numero secreto
if(chute==numeroSecreto){
    alert(`isso ai, Você acertou é ${numeroSecreto}!`);
}else{
    console.log('valor do numero secreto:',numeroSecreto);
    alert('você errou :(\nO número secreto era '+numeroSecreto);
}

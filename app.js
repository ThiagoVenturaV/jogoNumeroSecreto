alert(`Boas vindas ao jogo do numero secreto`);
let numeroSecreto = 2;
console.log(numeroSecreto)
let chute;

while(chute!=numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e 10`);
    if (chute== numeroSecreto){
        alert(`Isso aí! você descobriu o njumero secreto ${numeroSecreto}`);
    }else{
        if (chute > numeroSecreto){
            alert(`o numero secreto é menor que ${chute}`);
        }else{
            alert(`o numero secreto é maior que ${chute}`);
        }
}


}

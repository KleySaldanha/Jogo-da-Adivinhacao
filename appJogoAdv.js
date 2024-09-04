alert('Boas vindas ao jogo de número secreto');

let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
let palavraTentativa;

while (chute != numeroSecreto){
    chute = prompt('Escolha um número inteiro entre 1 e 100');

    if(chute == numeroSecreto){
        break;
    } else{
        if(chute > numeroSecreto){
            alert('O número secreto é menor que ' + chute);
        } else{
            alert('O número secreto é maior que ' + chute);
        }
        tentativas++;
    }
}

palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert('Isso aí! Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas + ' ' + palavraTentativa + '.');


var jogador1 = 4;
var jogador2 = 4;
var placar;

//if ternário

jogador1 != -1 && jogador2 != -1 ? console.log("Jogadores válidos") : console.log("um ou mais jogadores inválidos");

//if else

if(jogador1 > 0 && jogador2 < jogador1){
    console.log("Jogador 1 marcou ponto.");
    placar = jogador1 > jogador2;
}
else if(jogador2 > 0 && jogador1 < jogador2){
    console.log("Jogador 2 marcou ponto.");
    placar = jogador2 > jogador1;
}
else{
    console.log("Nenhum jogador marcou ponto.");
}

//switch/case
switch(placar){
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhou");
        break;
    case placar = jogador2 > jogador1:
        console.log("Jogador 2 ganhou");
        break;
    default:
        console.log("Empate");
}


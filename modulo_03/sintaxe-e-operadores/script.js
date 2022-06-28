function comparaNumeros(primeiroNumero, segundoNumero){

    const numerosIguais = primeiroNumero === segundoNumero;

    return numerosIguais ? "são iguais." : "não são iguais.";

}

function somaNumeros(primeiroNumero, segundoNumero){

    return primeiroNumero + segundoNumero;

}

function comparaSoma(soma){

    if(soma < 10){

        return "que é menor que 10.";

    }
    else if(soma < 20){

        return "que é maior ou igual a 10 e menor que 20."

    }
    else{

        return "que é maior ou igual a 20."

    }

}

let primeiroNumero = 9;
let segundoNumero = 3;
let comparacaoNumeros = comparaNumeros(primeiroNumero, segundoNumero);
let soma = somaNumeros(primeiroNumero, segundoNumero);
let comparacaoSoma = comparaSoma(soma);

console.log(`Os números ${primeiroNumero} e ${segundoNumero} ` + comparacaoNumeros + ` Sua soma é ${soma}, ${comparacaoSoma}`);
function calculadora(){

    //prompt
    console.log("Escolha uma operação:");
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");
    console.log("5 - Potenciação");
    console.log("6 - Módulo")

    //leitura da operação desejada
    // necessário instalar o Node.Js e o módulo readline-sync para permitir a entrada de valores pelo prompt de comando (npm install readline-sync)
    const leituraOperacao = require('readline-sync');
    const operacao = Number(leituraOperacao.question("Qual operacao deseja executar? "));

    //leitura do primeiro número
    const leituraPrimeiroNumero = require('readline-sync');
    let primeiroNumero = Number(leituraPrimeiroNumero.question("Informe o primeiro numero: "));

    //leitura do segundo número
    const leituraSegundoNumero = require('readline-sync');
    let segundoNumero = Number(leituraSegundoNumero.question("Informe o segundo numero: "));

    switch(operacao){
        case 1:
            console.log(`Soma entre ${primeiroNumero} e ${segundoNumero} igual a: ${primeiroNumero + segundoNumero}`);
            break;
        case 2:
            console.log(`Subtracao entre ${primeiroNumero} e ${segundoNumero} igual a: ${primeiroNumero - segundoNumero}`);
            break;
        case 3:
            console.log(`Multiplicacao entre ${primeiroNumero} e ${segundoNumero} igual a: ${primeiroNumero * segundoNumero}`);
            break;
        case 4:
            console.log(`Divisao entre ${primeiroNumero} e ${segundoNumero} igual a: ${primeiroNumero / segundoNumero}`);
            break;
        case 5:
            console.log(`Potenciacao entre ${primeiroNumero} e ${segundoNumero} igual a: ${primeiroNumero ** segundoNumero}`);
            break;
        case 6:
            console.log(`Módulo entre ${primeiroNumero} e ${segundoNumero} igual a: ${primeiroNumero % segundoNumero}`);
            break;
        default:
            console.log("Opcao invalida");
    }

}

calculadora();


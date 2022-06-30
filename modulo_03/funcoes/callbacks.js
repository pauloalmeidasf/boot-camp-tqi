const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

let num1 = 1;
let num2 = 2;

console.log(`Soma entre os números ${num1} e ${num2}: ${calc(soma, num1, num2)}`);
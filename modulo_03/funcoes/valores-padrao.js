//num = 1 é o valor padrão, caso não seja informado na chamada da função

function exponencial(base,  expoente = 1){
    let result = base ** expoente;
    return result;
}

let base = 2;
let expoente = 5;

console.log(`Potência do número ${base} elevado a ${expoente}: ${exponencial(base, expoente)}`);
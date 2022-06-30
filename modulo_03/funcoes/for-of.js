//loop em arrays e strings

//log de letras
function logLetras(palavra){
    for(l of palavra){
        console.log(l);
    }
}

//log de números
function logNumeros(numeros){
    for(n of numeros){
        console.log(n);
    }
}

let palavra = "anilina";
let numeros = [3,6,9,12];

console.log("Log de letras:");
logLetras(palavra);

console.log("--------------------------");

console.log("Log de números:");
logNumeros(numeros);
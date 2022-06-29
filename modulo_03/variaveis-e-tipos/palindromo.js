//solução 01
function verificaPalindromo(texto){

    let parametro = "";
    parametro = texto;

    //verifica se o texto é empty, null ou undefinide
    if(! parametro){

        return "string inexistente";

    }

    let textoInvertido;

    textoInvertido = parametro.split("").reverse().join("");

    return textoInvertido === parametro ? "é um palíndromo." :  "não é um palíndromo.";

}

//solução 02
function verificaPalindromo2(texto){

    let parametro = "";

    parametro = texto;

    //verifica se o texto é empty, null ou undefinide
    if(!parametro){

        return "string inexistente";

    }

    let textoInvertido = "";

    for(let i = 0; i < parametro.length; i++){

        textoInvertido += parametro[parametro.length - 1 - i];

    }

    return textoInvertido === parametro ? "é um palíndromo." :  "não é um palíndromo.";

}

let texto = "anilina";

console.log(verificaPalindromo2(texto));
function verificaPalindromo(string){
    if(!string) throw "String Inválida";

    return string === string.split('').reverse().join('') ? "Sim" : "Não";


}

function analisaString(string){
    try{
        return verificaPalindromo(string);
    }
    catch(e){
        throw e;
    }
    finally{
        console.log(`Avaliação da string ${string}`);
    }
}

let string = "anilina";

console.log(`A string ${string} é um palíndromo?: ${analisaString(string)}`);
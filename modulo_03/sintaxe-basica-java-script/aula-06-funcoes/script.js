//função

console.log("Função sem parâmetro");
function funcao(){
    console.log("Função desenvolvida em JavaScript");
}
funcao();
console.log("------------------------------------------------------");

console.log("Função com parâmetro");
function mensagem(primeiroParametro, segundoParametro){
    console.log(primeiroParametro, segundoParametro);
}
mensagem("Função realizada em", "JavaScript");
console.log("------------------------------------------------------");

//função atribuída a uma variável
let valor = function(){
    console.log("função atribuída a uma variável");
}
valor();
console.log("------------------------------------------------------");

//arrow Function
console.log("Arrow Function");
let contador = (numeroInicio)=>{
    numeroInicio++;
    return numeroInicio;
}
console.log("Valor do contador: " + contador(10));

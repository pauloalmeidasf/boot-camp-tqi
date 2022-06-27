/*
    escopo global -> var
    escopo local -> let
*/

//variáveis

//boolean
var valorBoolean = false
console.log("-----------------------------------------------");
console.log("Variável do tipo Boolean");
console.log("-----------------------------------------------");
console.log("Valor da variável: " + valorBoolean);
console.log("Tipo da variável: "+ typeof(valorBoolean));
console.log("-----------------------------------------------");

//number
var valorNumerico = 21.06
console.log("-----------------------------------------------");
console.log("Variável do tipo Number");
console.log("-----------------------------------------------");
console.log("Valor da variável: " + valorNumerico);
console.log("Tipo da variável: "+ typeof(valorNumerico));
console.log("-----------------------------------------------");

//string
var valorTexto = "Curso de JavaScript"
console.log("-----------------------------------------------");
console.log("Variável do tipo String");
console.log("-----------------------------------------------");
console.log("Valor da variável: " + valorTexto);
console.log("Tipo da variável: "+ typeof(valorTexto));
console.log("-----------------------------------------------");

//const
const valorConstante = Math.PI;
console.log("-----------------------------------------------");
console.log("Variável do tipo Constante");
console.log("-----------------------------------------------");
console.log("Valor da variável: " + valorConstante);
console.log("Tipo da variável: "+ typeof(valorConstante));
console.log("-----------------------------------------------");

//escopo global
var escopoGlobal = "global";
console.log("Tipo de Escopo: " + escopoGlobal);
console.log("-----------------------------------------------");

//escopo local
function escopoLocal(){
    let escopoLocal = "local";
    console.log("Tipo de Escopo: " + escopoLocal);
}
escopoLocal();
console.log("-----------------------------------------------");

//atribuição
var ano = 1982;
console.log("Valor da atribuição: " + ano);
console.log("-----------------------------------------------");

//comparação (valor, não é observado o tipo)
var mes = 6;
console.log("Valor da Comparação: " + (mes == '6'));
console.log("-----------------------------------------------");

//comparação idêntica (valor e tipo)
var mes = 6;
console.log("Valor da Comparação Idêntica: " + (mes === '6'));
console.log("-----------------------------------------------");

//adição
var precoNotebook = 6000;
var precoMonitor = 1500;
var adicao = precoNotebook + precoMonitor;
console.log("Valor da Adição: " + adicao);
console.log("-----------------------------------------------");

//subtracao
var precoNotebook = 6000;
var valorDesconto = 150;
var subtracao = precoNotebook - valorDesconto
console.log("Valor da Subtração: " + subtracao);
console.log("-----------------------------------------------");

//Multiplicação
var raio = 2;
var areaEfera = 4*Math.PI*Math.pow(raio,2);
console.log("Área de uma Esfera: " + areaEfera);
console.log("-----------------------------------------------");

//Divisão
var numero1 = 6;
var numero2 = 2;
var divisao = numero1 / numero2;
console.log(`Divisão entre ${numero1} e ${numero2} é igual a: ${divisao}`);
console.log("-----------------------------------------------");

//Módulo
var numero3 = 9;
var numero4 = 5;
var modulo = numero3 % numero4;
console.log(`Módulo entre ${numero3} e ${numero4} é igual a: ${modulo}`);
console.log("-----------------------------------------------");

//Módulo
var numero5 = 2;
var numero6 = 5;
var potenciacao = numero5 ** numero6;
console.log(`${numero5} elevado a ${numero6} é igual a: ${potenciacao}`);
console.log("-----------------------------------------------");

//Operador relacional (>)
var numero7 = 2;
var numero8 = 5;
console.log(`${numero7} é maior que  ${numero8}: ${numero7 > numero8}`);
console.log("-----------------------------------------------");

//Operador relacional (>=)
var numero9 = 2;
var numero10 = 2;
console.log(`${numero9} é maior ou igual a ${numero10}: ${numero9 >= numero10}`);
console.log("-----------------------------------------------");

//Operador relacional (<)
var numero11 = 2;
var numero12 = 5;
console.log(`${numero11} é menor que  ${numero12}: ${numero11 < numero12}`);
console.log("-----------------------------------------------");

//Operador relacional (<=)
var numero13 = 2;
var numero14 = 5;
console.log(`${numero13} é menor ou igual a  ${numero14}: ${numero13 <= numero14}`);
console.log("-----------------------------------------------");

//Operador lógico &&
var valorLogico1 = true;
var valorLogico2 = false;
console.log("Operador Lógico AND(&&)");
console.log(`${valorLogico1} && ${valorLogico2}: ${valorLogico1 && valorLogico2}`);
console.log("-----------------------------------------------");

//Operador lógico ||
var valorLogico3 = true;
var valorLogico4 = false;
console.log("Operador Lógico OR(||)");
console.log(`${valorLogico3} || ${valorLogico4}: ${valorLogico3 || valorLogico4}`);
console.log("-----------------------------------------------");

//Operador lógico !
var valorLogico5 = true;
console.log("Operador Lógico NOT(!)");
console.log(`!${valorLogico5}: ${!valorLogico5}`);
console.log("-----------------------------------------------");
/*  1. abrir o terminal
    2. abrir o diretório onde está o arquivo JavaScript
    3. digitar o comando "node arquivo.js" [sem aspas]
*/

//declara a função
function returnEvenValues(array){

    //declara um array vazio
    let evenNums = [];

    //inicia um loop no array
    for(let i = 0; i < array.length; i++){

        //verifica se o item do array é um númer par
        if(array[i] % 2 == 0 ){

            //insere o valor no array
            evenNums.push(array[i]);

        }

    }

    //retorna o array evenNums
    return evenNums;

}

//declara array com alguns números
let array = [1,2,4,5,6,7,8];

//mostra os números pares retornados pela função
console.log("Números pares de uma lista:", returnEvenValues(array));
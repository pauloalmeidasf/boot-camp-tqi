//loop em objetos

//retorna as propriedades (chaves) de um objeto
function propriedadesObjeto(obj){

    let array = [];

    for(p in obj){

        array.push(p);

    }

    return array;

}

//retorna os valores de um objeto
function valoresObjeto(obj){

    let array = [];

    for(p in obj){

        array.push(obj[p]);

    }

    return array;
    
}

const obj = {
    nome: 'Sofia',
    sobrenome: 'Hoffman',
    idade: 75
}

console.log("Propriedades do objeto obj: " + propriedadesObjeto(obj));
console.log("Valores do objeto obj: " + valoresObjeto(obj));
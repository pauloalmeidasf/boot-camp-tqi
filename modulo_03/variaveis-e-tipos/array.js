function substituirParPorZero(array){

    if(!array){

        return "array não definido.";

    }

    for(let i = 0; i < array.length; i++){

        if(array[i] % 2 == 0){

            array[i] = 0;

        }

    }

    return array;

}

let array = [1,2,3,4,5,6,7,8,9,10];

console.log(substituirParPorZero(array));
function validaArray(array, numeroElementosArray){

    try{

        if(!array && !numeroElementosArray) 
            throw new ReferenceError("Os parâmetros devem ser informados.");

        if(typeof array !== 'object') 
            throw new TypeError("É necessário informar um Array do tipo Object.");

        if(typeof numeroElementosArray !== 'number') 
            throw new TypeError("É necessário informar um número no segundo parâmetro.");

        if(array.length !== numeroElementosArray) 
            throw new RangeError("O número de elementos do Array deve ser igual ao valor do segundo parâmetro");

        return array;

    }
    catch(e){
        
        if(e instanceof ReferenceError){

            return "Erro do tipo ReferenceError. " + e.message; 

        }
        else if(e instanceof TypeError){

            return "Erro do tipo TypeError. " + e.message;

        }
        else if(e instanceof RangeError){
            
            return "Erro do tipo RangeError. " + e.message;

        }
        else{

            console.log("Erro não esperado: " + e.message);
            
        }
            
    }

}

let array = [1,2,3,4,5];
let numeroElementosArray = 4;

console.log(validaArray([],5));
function findMax(){
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

let array = [1,50,20,130,180,0];

console.log("Maior valor: " + findMax(... array));
const pessoa = {
    name: 'Miguel'
}

const animal = {
    name: 'Godi'
}

function getName(){
    return this.name;
}

const numeros = {
    num1: 1,
    num2: 2
}

function soma(a,b){
    return a + b + this.num1 + this.num2;
}

console.log("Nome da pessoa: " + getName.apply(pessoa));
console.log("Nome do animal: " + getName.apply(animal));

console.log("------------------------------------------");

let array = [3, 4];

console.log(`Soma entre os números 1, 2, ${array[0]} e ${array[1]}: ${soma.apply(numeros, array)}`);
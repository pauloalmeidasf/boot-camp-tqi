//uso de call

const pessoa = {
    nome: 'Miguel'
};

const animal = {
    nome: 'Duque'
};

function getNome(){
    return this.nome;
}

console.log("Nome da pessoa: " + getNome.call(pessoa));
console.log("Nome do animal: " + getNome.call(animal));

console.log("-------------------------------------------");

const numeros = {
    num1: 1,
    num2: 2
};

function soma(a, b){
    return this.num1 + this.num2 + a + b;
}

console.log(`Soma dos números ${numeros.num1}, ${numeros.num2}, 3 e 4: ${soma.call(numeros,3,4)}`);

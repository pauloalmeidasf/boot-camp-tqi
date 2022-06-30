function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

const pessoa = {
    nome: "Carla",
    idade: 26
}

const animal = {
    nome: "Fiona",
    idade: 5,
    raca: "Pug"
}

//call
console.log(calculaIdade.call(pessoa, 30));

//apply, o parâmetro deve ser um array, ou seja, a idade de 5 anos deve ser informado como [5]
console.log(calculaIdade.apply(animal,[5]));

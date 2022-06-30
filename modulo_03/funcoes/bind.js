
//função anônima
const retornaNomes = function(){
    return this.nome;
}

let pessoa = retornaNomes.bind({nome: 'Samuel'});

console.log("Nome: " + pessoa());
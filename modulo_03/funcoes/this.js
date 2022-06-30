const pessoa = {
    id: 1001,
    name: "John",
    lasName: "Shwartzman",
    getFullName: function(){
        return `${this.name} ${this.lasName}`;
    },
    getId: function(){
        return this.id;
    }
}

console.log("Id: " + pessoa.getId());
console.log("Nome Completo: " + pessoa.getFullName());
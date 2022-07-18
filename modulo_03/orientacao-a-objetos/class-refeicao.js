class Refeicao {

    constructor (prato){
        this.prato = prato;
    }

    refeicao(){
        return "Comendo " + this.prato;
    }
}

let comer = new Refeicao("Churrasco");

console.log(comer.refeicao());
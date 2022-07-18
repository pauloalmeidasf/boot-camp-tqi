class ContaBancaria{
    
    //campo privado (private field) é iniciado com o símbolo #
    //campo protegido (protected field) é iniciado com o símbolo _


    _saldo; 
    _tipo;

    constructor(agencia, numero, tipo){

        this.agencia = agencia;
        this.numero = numero;
        this._tipo = tipo;
        this._saldo = 0; 

    }

    get saldo(){

        return this._saldo;

    }

    sacar(valor){

        if(valor > this._saldo){

            return "Saldo insuficiente.";

        }

        this._saldo -= valor;

        return "Operação realizada."

    }

    depositar(valor){

        this._saldo += valor;

        return "Operação realizada."

    }

}

class ContaCorrente extends ContaBancaria{

    //campo privado (private field) é iniciado com o símbolo #
    //campo protegido (protected field) é iniciado com o símbolo _

    _cartaoCredito;
    _tipo;

    constructor(agencia, numero, cartaoCredito){

        super(agencia, numero);

        this._tipo = "corrente";

        this._cartaoCredito = cartaoCredito;

    }

    get cartaoCredito(){

        return this._cartaoCredito;

    }

}

class ContaPoupanca extends ContaBancaria{

    //campo privado (private field) é iniciado com o símbolo #
    //campo protegido (protected field) é iniciado com o símbolo _

    _tipo;

    constructor(agencia, numero){

        super(agencia, numero);

        this._tipo = "poupança";

    }

}

class ContaUniversitaria extends ContaBancaria{

    //campo privado (private field) é iniciado com o símbolo #
    //campo protegido (protected field) é iniciado com o símbolo _

    _tipo;

    constructor(agencia, numero){

        super(agencia, numero);

        this._tipo = "universitária";

    }

    sacar(valor){

        if(valor > 500){

            return "Operação não permitida.";

        }

        this._saldo -= valor;

        return "Operação realizada."

    }

}

const minhaConta = new ContaUniversitaria(1, 234);

let valorDeposito = 1000;
let valorSaque = 650;

console.log(`Depósito de ${valorDeposito}: ${minhaConta.depositar(valorDeposito)}`);
console.log(`Saldo da Conta Corrente após depósito: ${minhaConta.saldo}`);

console.log(`Saque de ${valorSaque}: ${minhaConta.sacar(valorSaque)}`);
console.log(`Saldo da Conta Corrente após saque: ${minhaConta.saldo}`);
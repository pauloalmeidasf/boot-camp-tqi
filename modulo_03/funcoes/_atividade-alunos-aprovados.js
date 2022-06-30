function getAlunosAprovados(arrayAlunos, notaMinimaAprovacao){

    let arrayAlunosAprovados = [];

    for(let j = 0; j < arrayAlunos.length; j++){

        let { nota, nome } = arrayAlunos[j];

        if(nota >= notaMinimaAprovacao){

            arrayAlunosAprovados.push(nome);

        }
    }

    return arrayAlunosAprovados

}

const alunos = [
    {
        nome: "João",
        nota: 5,
        turma: "1B"
    },
    {
        nome: "Sofia",
        nota: 8,
        turma: "1B"
    },
    {
        nome: "Paulo",
        nota: 9,
        turma: "2C"
    }
];

console.log("Alunos Aprovados: " + getAlunosAprovados(alunos, 7));
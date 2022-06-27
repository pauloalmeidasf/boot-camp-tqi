//declarção de um array

let array = ['JavaScript', 1, true, ['C#', 1, true], ['Java', 1, false]];

//push (insere um novo elemento no fim do array)
array.push("HTML");
array.push("CSS");

//pop (remove o último elemento do array)
array.pop();

//shift (remove item no início do array)
array.shift();

//unshift (insere item no início do array)
array.unshift("JavaScript");

//indexOf (retorna o índice de um item)
console.log("Índice do item JavaScript: " + array.indexOf("JavaScript"));

//splice (remove, ou substitui, um item pelo índice)
array.splice(3,4);

//slice (retorna uma parte de um array)
array.slice(0,1);

//forEach
array.forEach(
    function(item, index){
        console.log("Item: " + item + ". Indice: " + index);
    }
);

//objetos

//declaraçao de um objeto
let curso = {nome: "Java", duracao: 6, concluido: true};

//desestruturação de objetos
let nomeCurso = curso.nome;
console.log(nomeCurso);

var {nome, concluido} = curso;
console.log(curso.concluido);
//declaração de um array
let cursos = ["Java", "C#", "JavaScript","Python","HTML","CSS", "AWS", "Azure","Docker", "Angular", "React", "Vue", "Linux", "Bootstrap"];
let total = 0;

//laço de repetição for

for(let i = 0; i < cursos.length; i++){
    total = total + 1;
}
console.log("Total de cursos (usando o laço FOR): " + total);

//laço de repetição for in (mostra o indice ou propriedade)

console.log("Indices dos cursos usando o laço FOR IN");
for(let i in cursos){
    console.log(i);
}

//laço de repetição for in (mostra o valor)

console.log("Nomes dos cursos usando o laço FOR OF");
for(let i of cursos){
    console.log(i);
}

//laço de repetição while

console.log("Contagem de 0 até 10 usando WHILE");
let x = 0;
while(x <= 10){
    console.log(x);
    x++;
}

//laço de repetição do while

console.log("Contagem de 0 até 10 usando DO WHILE");
let y = 0;
do{
    console.log(y);
    y++;
}while(y <= 10);
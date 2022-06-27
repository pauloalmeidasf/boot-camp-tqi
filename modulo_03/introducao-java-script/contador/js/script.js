function increment(){

    var valorInicial = document.getElementById("currentNumber").textContent;
    var valorFinal = document.getElementById("currentNumber");
    var incremento = parseInt(valorInicial) + 1;

    valorFinal.innerHTML = incremento;

    if(incremento == 0 ){

        valorFinal.style.color = "orange";
    }
    else if(incremento > 0 ){

        valorFinal.style.color = "blue";

    }  

} 

function decrement(){

    var valorInicial = document.getElementById("currentNumber").textContent;
    var valorFinal = document.getElementById("currentNumber");
    var decremento = parseInt(valorInicial) - 1;

    valorFinal.innerHTML = decremento;

    if(decremento == 0 ){

        valorFinal.style.color = "orange";
    }
    else if(decremento < 0 ){

        valorFinal.style.color = "red";

    }    

} 
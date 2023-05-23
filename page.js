// Respuestas Correctas
let correctas = [4,1,2,2];

// Respuestas de Usuario
let opcion_elegida=[];
let cantidad_correctas=0;

//función del numero de pregunta y el input de la pregunta
function respuesta(num_pregunta, seleccionada){
opcion_elegida[num_pregunta] = seleccionada.value;
id= "p" + num_pregunta;
labels = document.getElementById(id).childNodes;
labels[3].style.backgroundColor = "white";
labels[5].style.backgroundColor = "white";
labels[7].style.backgroundColor = "white";

seleccionada.parentNode.style.backgroundColor = "#cec0fc"
}
// función que compara para corregit

function corregir(){
    cantidad_correctas = 0;
    for(i=0; i < correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}



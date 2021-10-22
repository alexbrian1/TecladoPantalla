let fila1 = ['Q','W','E','R','T','Y','U','I','O','P'];
let fila2 = ['A','S','D','F','G','H','J','K','L','Ñ'];
let fila3 = ['Z','X','C','V','B','N','M'];
let visor = [""];



function teclear(tecla,fila) {
    if (fila == "fila1") {
        visor = visor + (fila1[tecla]);
        document.getElementById("visorTeclado").value = visor;
        
    }else if (fila == "fila2") {
        visor = visor + (fila2[tecla]);
        document.getElementById("visorTeclado").value = visor;
    }else if (fila == "fila3") {
        visor = visor + (fila3[tecla]);
        document.getElementById("visorTeclado").value = visor;
    }
}


function borrar() {
    visor = "";
    document.getElementById("visorTeclado").value = "";

}

function space(params) {
    visor = visor + ' ';
    
}
function backspace(params) {    
    visor = visor.substring(0,visor.length -1);
    document.getElementById("visorTeclado").value = visor;
    
}
// function backspace(params) {    
//         var bkspace = document.getElementById("visorTeclado").value;
//         document.getElementById("visorTeclado").value = bkspace.substring(0,bkspace.length -1);
      
// }

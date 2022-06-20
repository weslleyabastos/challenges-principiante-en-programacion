//dibujar la horca

function dibujarHorca() {
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 5;
    pincel.beginPath();
    //haz horizontal inferior
    pincel.moveTo(440, 500);
    pincel.lineTo(800, 500);
    errores += 1;
    //Horca
    if (errores === 1) {
        //haz vertical 
        pincel.moveTo(460, 500);
        pincel.lineTo(460, 100);
        //haz horizontal superior
        pincel.moveTo(650, 100);
        pincel.lineTo(460, 100);
        //cuerda
        pincel.moveTo(650, 100)
        pincel.lineTo(651, 171);
        pincel.fillStyle = "#000000"
        pincel.stroke();
    }
    //Cabeza
    else if (errores === 2) {
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.arc(650, 230, 50, 0, Math.PI * 2);
        pincel.stroke();
    }
    /* Tronco */
    else if (errores === 3) {
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.moveTo(650, 389);
        pincel.lineTo(650, 289);
        pincel.stroke();
    }
    //Pierna derecha
    else if (errores === 4) {
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.moveTo(650, 389);
        pincel.lineTo(690, 450);
        pincel.stroke();
    }

    // Pierna Izquierda
    else if (errores === 5) {
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.moveTo(650, 389);
        pincel.lineTo(600, 450);
        pincel.stroke();
    }

    //brazo derecho
    else if (errores === 6) {
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.moveTo(650, 330);
        pincel.lineTo(690, 389);
        pincel.stroke();

        console.log("Você perdeu");
    }
    //Brazo Izquierdo
    else if (errores === 7) {
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.moveTo(650, 330);
        pincel.lineTo(600, 389);
        pincel.stroke();
    }
}


function ensenarMensajeDeVictoria() {
    pincel.font = ' bold 50px Inter';
    pincel.lineWidth = 6
    pincel.lineCap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "green"
    pincel.fillText("Felicitaciones!", 790, 420)
}



function ensenarMensajeDeDerrota() {
    pincel.font = ' bold 50px Inter';
    pincel.lineWidth = 6
    pincel.lineCap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "red"
    pincel.fillText("Fin de juego!", 790, 420)
}

//Escribir las letra en los trazos
function escribirLetra(letra, x) {
    //escribiendo con canvas
    pincel.lineWidth = 2;
    pincel.font = "50px sans-serif";
    pincel.fillStyle = "#0A3871";
    pincel.fillText(letra, x + 400, 590);
}

//Escribir los errores
function escribirLetraIncorrecta(letra, x) {
    //escribiendo con canvas
    pincel.font = "30px sans-serif";
    pincel.fillStyle = "#0A3871";
    pincel.fillText(letra, x + 790, 320);
}
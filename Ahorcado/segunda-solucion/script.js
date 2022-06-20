//Seletores
let pantalla = document.querySelector("canvas");
let botonNuevoJuego = document.getElementById("btn-nuevo-juego").style.display = "none"
let btnSalirDesaparecer = document.getElementById("btn-salir").style.display = "none"
let divAgregarPalabra = document.getElementById("agregar-palabra").style.display = 'none';
let btnNuevoJueogo = document.getElementById("btn-nuevo-juego");
let btnSalir = document.getElementById("btn-salir");
let btnCancelar = document.getElementById("btn-cancelar");

//capturando el contexto para dibujar las palabras
let pincel = pantalla.getContext("2d");
let numeroDeErrores = 7


//array de palabras
palabraSecreta = ["HTML", "CSS", "JAVA", "ORACLE", "ALURA"];

//lógica de captura do tamanho da array com menos 1, para que o valor capturado seja real ao numero que precisaremos capturar
dimensionArray = palabraSecreta.length - 1;
console.log(dimensionArray)

//número aleatorio
numeroAleatorio = Math.round(Math.random() * dimensionArray);

//iteración del contador de intentos
let contador = 0;
//condiciones para la victoria
let puntos = 0;
//array de validación
let letraElegida = [];
let letrasIncorrectas = [];
let errores = 0;

//Palabra Elegida
let palabraElegida = palabraSecreta[numeroAleatorio];
console.log(palabraElegida)

//eventos

// captura el id "iniciar-juego" en el click y direcciona el program al método dque inicia el juego
document.getElementById("iniciar-juego").onclick = () => {
    iniciarJuego();
    document.addEventListener("keydown", capturarLetra);
}

// captura el id "btn-guardar", guarda la palabra agrega y inicia el juego
document.getElementById("btn-guardar").onclick = () => {
    guardarPalabra();
    iniciarJuego();
}

//actualiza la pantalla cuando el usuario hace click en el botón "nuevo juego"
btnNuevoJuego.addEventListener("click", function () {
    location.reload();
});

//actualiza la pantalla cuando el usuario hace click en el botón "salir"
btnSalir.addEventListener("click", function () {
    location.reload();
});

//actualiza la pantalla cuando el usuario hace click en el botón "cancelar"
btnCancelar.addEventListener("click", function () {
    location.reload();
});




//Dibujando los campos adonde las letras serán digitadas
function dibujarLineas() {
    //elección de la palabra capturando su tamano para dibujar los trazos 
    let numeroDeLetras = palabraSecreta[numeroAleatorio].length + 1;
    console.log(numeroDeLetras)
    //a cada iteração possivel no looping um desenho sera criado
    // cada iteración posible en el looping creará un dibujo
    for (let i = 1; i < numeroDeLetras; i++) {

        // el tamanño del trazo en relación a la pantalla
        let x = 60 * i;

        //dibujando las líneas
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 6;
        pincel.beginPath();
        pincel.moveTo(400 + x, 600);
        pincel.lineTo((x + 450), 600);
        pincel.stroke();
    }
}




//Validando si la letra está correcta
function palabraCorrecta(letra) {

    //variable de iteración booleana
    let esUnaLetra = false;

    //looping para validar las letras digitadas
    for (let i = 0; i < palabraElegida.length; i++) {

        if (letra === palabraElegida[i]) {

            //la variable de iteración booleanda se altera para true y espera un nuevo intento
            esUnaLetra = true;

            //posibilidad de validación 1
            if (i === 0) {
                escribirLetra(palabraElegida[i], 60);
                verificarVictoria(letra)
                puntos += 1;
            }
            //posibilidad de validación 2
            else if (i === 1) {
                escribirLetra(palabraElegida[i], 125);
                verificarVictoria(letra)
                puntos += 1;
            }
            //posibilidad de validación 3
            else if (i === 2) {
                escribirLetra(palabraElegida[i], 185);
                verificarVictoria(letra)
                puntos += 1;
            }
            //posibilidad de validación 4
            else if (i === 3) {
                escribirLetra(palabraElegida[i], 245);
                verificarVictoria(letra)
                puntos += 1;
            }
            //posibilidad de validación 5
            else if (i === 4) {
                escribirLetra(palabraElegida[i], 305);
                verificarVictoria(letra)
                puntos += 1;
            }
            else {
                escribirLetra(palabraElegida[i], 365);
                verificarVictoria(letra)
                puntos += 1;
            }
        }
    }
    // si la letra digitada no existe en este contexto, ella será escrita como incorrecta
    if (esUnaLetra == false) {

        verificarDerrota(letra);
    }

}


//Verifica si el usuario fue derrotado
function verificarDerrota(letra) {

    //verifica si la letra ya fue incluída en el array de las correctas y incorrectas
    if (letrasIncorrectas.includes(letra) || letraElegida.includes(letra)) {
        alert('Esta letra ya fue digitada')
     }
    else {
        //incluyendo las letras que ya digitadas en el array
        letrasIncorrectas.push(letra);
        console.log(letrasIncorrectas, "erro");
        contador = contador + 20;
        
        //direcciona para el método que escribi las letras
        escribirLetraIncorrecta(letra, contador);

        //direcciona para el método que dibuja la horca
        dibujarHorca();

        //valida si el usuario cometió el número máximo de errores, para poder exibir el mensaje de fin de juego
        if (letrasIncorrectas.length > numeroDeErrores) {
            ensenarMensajeDeDerrota()
        }
    }
}

//Verifica se el usuário ganhou
function verificarVictoria(letra) {
    letraElegida.push(letra.toUpperCase());
    console.log(letraElegida, "acerto");
    if (letraElegida.length == palabraElegida.length) {
        console.log("se ganó")
        ensenarMensajeDeVictoria()
        
    }
}

//Inicia el juego
function iniciarJuego() {
    document.getElementById("div-desaparece").style.display = 'none';
    dibujarLineas();
    document.getElementById("btn-nuevo-juego").style.display = "block"
    document.getElementById("btn-salir").style.display = "block"
};

//haz con que los botones de la pantalla de home desaparezcan y los de la de agregar palabra aparezcan
function ensenarPantallaDeAgregarPalabra() {
    document.getElementById("div-desaparece").style.display = 'none';
    document.getElementById("agregar-palabra").style.display = "block";

}

// guarda la palabra que el usuario quiere agregar
function guardarPalabra() {
    console.log(palabraSecreta)
    //captura lo que el usuario ha digitado
    let nuevaPalabra = document.getElementById('input-nueva-palavra').value;

    // incluye la palabra que el usuario digitó en el array de las palabras a seren sorteadas
    palabraSecreta.push(nuevaPalabra.toUpperCase());
    alert('La palabra fue guardada')
    console.log(palabraSecreta)
    
    // haz con que los componentes de la pantalla de agregar palabra desaparezcan
    document.getElementById("agregar-palabra").style.display = "none";

}


function capturarLetra(evento) {

    //iniciando la captura
    let letraEscrita = evento.key;
    console.log(letraElegida, 'testeAntesDoIf')
    //determinando con la tabla ASCI cuales son quais teclas que pueden ser guardadas
    if (evento.keyCode >= 65 && evento.keyCode <= 90) {

        if (letraElegida.includes(letraEscrita.toUpperCase()) || palabraElegida.includes(letraEscrita)) {
             console.log(letraElegida, 'testeIfDasletrasIncorrectas')
            verificarDerrota(letraEscrita.toUpperCase())
        } else {

            console.log(letraEscrita, 'testeElseLetrasCertas')
            palabraCorrecta(letraEscrita.toUpperCase());

        }

    } else {

        alert("Digite solamente letras"); 
    }

}





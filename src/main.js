// DECLARACION DE VARIABLES
let nombre, opcion, cantidadPreguntas = 0, contadorPregunta = 0
let contadorRespuesta = 0, contadorBuenas = 0, contadorMalas = 0;

// ARREGLOS PARA LA TRIVIA ANIME
// src: https://www.vix.com/es/btg/series/59016/cuanto-sabes-de-anime-contesta-estas-preguntas-y-descubrelo-trivia
let preguntasAnime = [
  "¿Cuál es el apellido de Edward en Fullmetal Alchemist?",
  "¿Cuál es el EVA que pilotea Shinji en Neon Genesis Evangelion?",
  "¿Qué busca Inuyasha?",
  "¿Cuál es el verdadero nombre de Kira en Death Note?",
  "¿Cuál es el nombre japonés de Ash Ketchum?"
];
let respuestasAnime = [
  "Elmac", "Elric","Elrond",
  "Unidad 00", "Unidad 01","Unidad 02",
  "Una persona", "Una espada","Una joya",
  "Light Yagami", "Ryuzaki Yagami","Soichiro Yagami",
  "Yuji", "Shinji","Satoshi"
];
let respuestaBuenasAnime = ["Elric", "Unidad 01", "Una joya", "Light Yagami", "Satoshi"];

// ARREGLOS PARA LA TRIVIA SERIES
// src: https://www.infobae.com/espacio-no-editorial/2018/10/17/trivia-cuanto-sabes-de-estas-diez-series-famosas/
let preguntasSeries = [
  "¿Cuál fue la fecha de estreno de The Walking Dead?",
  "¿Cómo se llama el villano principal de la primera temporada de Homeland?",
  "¿Qué banda compuso la canción \"Lluvias de Castamere\" para el capítulo \"La Boda Roja\" Game of Thrones?",
  "¿En los libros de qué autora se basa la serie Outlander?",
  "¿Qué conexión hay entre Westworld y Game of Thrones?"
];
let respuestasSeries = [
  "17 de octubre de 2009", "31 de octubre 2010","15 de septiembre de 2011",
  "Abu Nazir", "Abu Bakhar","Abur Salah",
  "Dream Theater", "Sigur Ros","Sonata Arctica",
  "J.K Rowling", "Diana Gabaldon","Emma Thompson",
  "Fueron escritas por George R. R. Martin", "Fueron filmadas en el mismo estudio","La música fue compuesta por Ramin Djawadi"
];
let respuestaBuenasSeries = ["31 de octubre 2010", "Abu Nazir", "Sigur Ros", "Diana Gabaldon", "La música fue compuesta por Ramin Djawadi"];

// OBTENCION DE ELEMENTOS DEL HTML
// Parte 1: Pre-trivia
const divIntro = document.getElementById('intro');
const siguiente = document.getElementById('siguiente');
const txtNombre = document.getElementById('txt-name');
const spanNombre = document.getElementById('spanName');
const paso1 = document.getElementById('step1');
const paso2 = document.getElementById('step2');
const checkAnime = document.getElementById('card-anime');
const checkSeries = document.getElementById('card-series');

// Parte 2: Trivia
const divTrivia = document.getElementById('trivia');
const tiempoPregunta = document.getElementById('card-time');
const numeroPregunta = document.getElementById('card-number');
const divPregunta = document.getElementById('card-question');
const btnOpc1 = document.getElementById('btn-opc1');
const btnOpc2 = document.getElementById('btn-opc2');
const btnOpc3 = document.getElementById('btn-opc3');
const alerta = document.getElementById('alert');
const textoAlerta = document.getElementById('alert-msg');

// Parte 3: Post-trivia
const divResultados = document.getElementById('score');
const scoreTitle = document.getElementById('score-title');
const scorePoints = document.getElementById('score-points');
const scoreMensaje = document.getElementById('score-msg');
const scoreBuenas = document.getElementById('score-buenas');
const scoreMalas = document.getElementById('score-malas');
const btnJugar = document.getElementById('btnJugar');
const btnSalir = document.getElementById('btnSalir');


// CREACIÓN DE EVENTLISTENERS
// Agregando evento onclick en el botón "siguiente" de las indicaciones
siguiente.addEventListener("click", function (e) {
  // Prevenir el recargo de la página
  e.preventDefault();
  // Obtener el nombre de la caja de texto
  nombre = txtNombre.value;
  // Limpiando el input del nombre
  txtNombre.value = "";
  // Agregar el nombre al span contenedor
  spanNombre.innerText = nombre;

  // Ocultar paso1
  paso1.classList.add('hidden');
  // Mostrar paso 2
  paso2.classList.remove('hidden');
});

// Agregando evento onclick en el div con la opc Anime
checkAnime.addEventListener("click", function () {
  // Establenciendo la opc seleccionada
  opcion = "anime";
  // Obteniendo el total de las preguntas
  cantidadPreguntas = preguntasAnime.length;
  // Invocando la función que comenzará la trivia
  empezarTrivia();
});

// Agregando evento onclick en el div con la opc Series
checkSeries.addEventListener("click", function () {
    // Establenciendo la opc seleccionada
  opcion = "series";
  // Obteniendo el total de las preguntas
  cantidadPreguntas = preguntasSeries.length;
  // Invocando la función que comenzará la trivia
  empezarTrivia();
});

// Agregando evento onclick para btn1 de la trivia
btnOpc1.addEventListener("click", function () {
  // Enviando respuesta del usuario para verificar si es correcta
  compararRespuesta(btnOpc1.innerText);
});

// Agregando evento onclick para btn2 de la trivia
btnOpc2.addEventListener("click", function () {
  // Enviando respuesta del usuario para verificar si es correcta
  compararRespuesta(btnOpc2.innerText);
});

// Agregando evento onclick para btn2 de la trivia
btnOpc3.addEventListener("click", function () {
  // Enviando respuesta del usuario para verificar si es correcta
  compararRespuesta(btnOpc3.innerText);
});

// Agregando evento onclick para btnJugar
btnJugar.addEventListener("click", function () {
  // Mostrando div de la Introducción
  divIntro.classList.remove('hidden');
  // Mostrando div paso2 para volver a jugar
  paso2.classList.remove('hidden');
  // Ocultando pantalla de resultados
  divResultados.classList.add('hidden');
  // Iniciarlizar contadores
  inicializarContadores();
});

// Agregando evento onclick para btnSalir
btnSalir.addEventListener("click", function () {
  // Mostrando div de la Introducción
  divIntro.classList.remove('hidden');
  // Mostrando div paso1
  paso1.classList.remove('hidden');
  // Ocultando pantalla de resultados
  divResultados.classList.add('hidden');
  // Iniciarlizar contadores
  inicializarContadores();
});

// FUNCIONES
// función para inicializar contadores
function inicializarContadores() {
  contadorPregunta = 0;
  contadorRespuesta = 0;
  contadorBuenas = 0;
  contadorMalas = 0;
}

// Función que llama los métodos necesario para comenzar la trivia
function empezarTrivia(){
  // Ocultar div paso2
  paso2.classList.add('hidden');
  // Ocultar div de Introducción al juego
  divIntro.classList.add('hidden');
  // Mostrar div de la trivia
  divTrivia.classList.remove('hidden');
  console.log("Trivia iniciada:", opcion);
  // Llenando la trivia con pregunta y respuestas
  llenarCardTrivia();
  // Iniciando el temporizador
  tiempo();
}

// Función que para la trivia
function finalizarTrivia(){
  // Parar el setInterval
  clearInterval(temporizador);
  // Mostrar Resultados
  resultados();
}

// Función que prepara todo lo necesario para jugar la siguiente pregunta
function siguienteTrivia(){
  // Aumentando el contador de preguntas en 1
  contadorPregunta++;
  // Parar el setInterval
  clearInterval(temporizador);
  // Llenando la trivia con pregunta y respuestas de la siguente pregunta
  llenarCardTrivia();
  // Iniciando el temporizador
  tiempo();
}

// Función que va a llevar el control del tiempo en cada pregunta
function tiempo() {
  // Estableciendo los segundos
  let segundos = 10;
  // Limpiando el tiempo restante
  tiempoPregunta.innerText = "Time";
  // Estableciendo el setInterval que llevara el conteo de los segundos
  temporizador = setInterval(function() {
    // Verificar si el tiempo se ha acabado
    if (segundos < 0) {
      // Aumentando el contadorMalas en 1
        contadorMalas++
      // Verificando si aún existen preguntas en la trivia
      if (contadorPregunta != (cantidadPreguntas -1)) {
        // Comenzar la siguiente trivia
        siguienteTrivia();
      } else {
        // Finalizando la trivia y mostrar los resultados
        finalizarTrivia();
      }
    } else {
      // Mostrar el tiempo restante
      tiempoPregunta.innerText = segundos;
      // Restar 1 a segundos
      segundos--;
    }
  }, 1000);
}

// Función para llenar los valores de la Card con la pregunta y respuestas
function llenarCardTrivia() {
  // Veficando cual trivia se está jugando
  if (opcion == "anime") {
    // Mostrar el número de la pregunta actual
    numeroPregunta.innerText = (contadorPregunta + 1) + "/" + cantidadPreguntas;
    // Mostrar la pregunta actual
    divPregunta.innerText = preguntasAnime[contadorPregunta];
    // Mostrar las repuestas de la pregunta actual
    btnOpc1.innerText = respuestasAnime[contadorRespuesta++];
    btnOpc2.innerText = respuestasAnime[contadorRespuesta++];
    btnOpc3.innerText = respuestasAnime[contadorRespuesta++];
  } else {
    // Mostrar el número de la pregunta actual
    numeroPregunta.innerText = (contadorPregunta + 1) + "/" + cantidadPreguntas;
    // Mostrar la pregunta actual
    divPregunta.innerText = preguntasSeries[contadorPregunta];
    // Mostrar las repuestas de la pregunta actual
    btnOpc1.innerText = respuestasSeries[contadorRespuesta++];
    btnOpc2.innerText = respuestasSeries[contadorRespuesta++];
    btnOpc3.innerText = respuestasSeries[contadorRespuesta++];
  }
}

// Función que compara el texto que seleccionó el usuario con la respuesta correcta
function compararRespuesta(res) {
  // res = Respuesta seleccionada por el usuario
  if (opcion == "anime") {
    // Verificar si la respuesta del usuario es correcta
    if( res == respuestaBuenasAnime[contadorPregunta] )
    {
      // alert('correcto');
      mostrarMensaje("¡Correcto!");
      // Incrementar el contador de respuestas buenas
      contadorBuenas++;
    }else {
      // alert('incorrecto');
      mostrarMensaje("¡Incorrecto!");
      // Incrementar el contador de respuestas malas
      contadorMalas++;
    }
  } else {
    // Verificar si la respuesta del usuario es correcta
    if( res == respuestaBuenasSeries[contadorPregunta] )
    {
      // alert('correcto');
      mostrarMensaje("¡Correcto!");
      // Incrementar el contador de respuestas buenas
      contadorBuenas++;
    } else {
      // alert('incorrecto');
      mostrarMensaje("¡Incorrecto!");
      // Incrementar el contador de respuestas malas
      contadorMalas++;
    }
  }
  // Verificando si aún no ha terminado la trivia
  if (contadorPregunta != (cantidadPreguntas -1)) {
    // Preparando lo necesario para jugar la siguiente pregunta
    siguienteTrivia();
  } else {
    // Finalizando la trivia y mostrar los resultados
    finalizarTrivia();
  }
}

// Función que mostrará los resultados de la trivia
function resultados() {
  // Ocultando el div de la Trivia
  divTrivia.classList.add('hidden');
  // Mostrando el div de los resultados
  divResultados.classList.remove('hidden');
  // Mostrando título según el puntaje
  if (contadorBuenas >= 2) {
    scoreTitle.innerHTML = "¡Enhorabuena " + nombre + "! <i class=\"fas fa-smile-wink\"></i>";
  } else {
    scoreTitle.innerHTML = "¡Lástima " + nombre + "! <i class=\"fas fa-sad-tear\"></i>";
  }
  // Mostrar puntaje
  scorePoints.innerText = contadorBuenas * 20;
  // Mostrando mesaje según el puntaje
  if (contadorBuenas == 5) {
    scoreMensaje.innerText = "De seguro lo sabes todo sobre " + opcion;
  } else if (contadorBuenas <= 4 && contadorBuenas >= 2) {
    scoreMensaje.innerText = "De seguro disfrutas mucho ver " + opcion;
  } else {
    scoreMensaje.innerText = "Al parecer no sabes mucho sobre " + opcion;
  }
  // Mostrar cantidad Buenas
  scoreBuenas.innerText = contadorBuenas;
  // Mostrar cantidad Malas
  scoreMalas.innerText = contadorMalas;
}

// Función para mostrar msj al usuario {
function mostrarMensaje(mensaje) {
  textoAlerta.innerText = mensaje;
  alerta.classList.remove('hidden');
  let segundos = 1;
  tiempoAlerta = setInterval(function () {
    if(segundos == 0) {
      console.log(segundos);
      alerta.classList.add('hidden');
      clearInterval(tiempoAlerta);
    } else {
      console.log(segundos);
      segundos--;
    }
  }, 500);
}

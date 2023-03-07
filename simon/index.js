

var colores = ["rojo","verde","azul","amarillo"];
var secuenciaPress = [];
var secuencia = [];
var inicio = false;
var pos = 0; 
var nivelActual = 1;


$(document).on("keydown", function(e)  {
  
  if (!inicio) {
   iniciarJuego();
   inicio = true;
}
})

$(".boton").on("click", function(e) {
var botonPress = e.target.classList[0];
realizarSonido(botonPress);
realizarAnimacion(botonPress);
comprobarSecuencia(botonPress);


})




function perder(){
  secuencia = [];
  secuenciaPress = [];
  var sonidoPerder = new Audio("sounds/incorrecto.mp3");
  sonidoPerder.play();
  nivelActual = 1;
  $("body").css("background-color","red");
  $(".titulo").text("Perdiste :(");
  setTimeout(() => {
    $(".titulo").text("Presiona cualquier tecla.");
  }, 1000);
 
}

function obtenerRandom (){
  var num = Math.floor(Math.random()*4);
  return num; 
}


function realizarSonido(boton) {
  var sonido = new Audio("sounds/" + boton + ".mp3");
  sonido.play();
}



function realizarAnimacion(boton) {
  switch (boton) {
    case "rojo":
      $("." + boton).css("background-color", "#FF1E1E");
      $("." + boton).css("border-color", "#fff");

      setTimeout(function() {
        $("." + boton).css("background-color", "#EB5353");
        $("." + boton).css("border-color", "#000");


      }, 150);
      break;

    case "verde":
      $("." + boton).css("background-color", "#16FF00");
      $("." + boton).css("border-color", "#fff");

      setTimeout(function() {
        $("." + boton).css("background-color", "#36AE7C");
        $("." + boton).css("border-color", "#000");
      }, 150);
      break;
    case "amarillo":
      $("." + boton).css("background-color", "#FCE700");
      $("." + boton).css("border-color", "#fff");

      setTimeout(function() {
        $("." + boton).css("background-color", "#F8F988");
        $("." + boton).css("border-color", "#000");
      }, 150);
      break;

    case "azul":
      $("." + boton).css("background-color", "#0002A1");
      $("." + boton).css("border-color", "#fff");

      setTimeout(function() {
        $("." + boton).css("background-color", "#187498");
        $("." + boton).css("border-color", "#000");
      }, 150);
      break;

    default:
      break;
  }
}

function reproducirSecuencia(arrayColores) {
  for (let i = 0; i < arrayColores.length; i++) {
    setTimeout(function() {
      realizarAnimacion(arrayColores[i]);
      realizarSonido(arrayColores[i]);
    }, (i + 1) * 600);
  }
}

function siguienteNivel(){
  secuenciaPress = [];
  secuencia.push(colores[obtenerRandom()]);
  nivelActual = nivelActual + 1;
  pos = 0;
  reproducirSecuencia(secuencia);
  console.log(secuencia);
}

function comprobarSecuencia(colorActual){
  if (colorActual === secuencia[pos]) {
    pos = pos +1;
    secuenciaPress.push(colorActual);
    if (secuenciaPress.length === secuencia.length) {
      pos = 0;
      setTimeout(() => {
        $(".titulo").text("Nivel: " + (nivelActual + 1))
        siguienteNivel();
      }, 1000);
    }
  } else{
    perder();
    inicio = false;
  }
    
}

function iniciarJuego(){
  if (secuencia.length === 0){
    $("body").css("background-color","#060047");
    secuencia.push(colores[obtenerRandom()]);
    reproducirSecuencia(secuencia);
    pos = 0;
    $(".titulo").text("Nivel: " + nivelActual)
  }
}




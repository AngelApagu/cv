var titulo = document.querySelector("h1");
var operador = document.querySelector("h2");
var audio = new Audio("tecla.mp3");
var audio2 = new Audio("delete.mp3");
var audio3 = new Audio("res.mp3");
$(".numero").on("click",function(e){
    var botonSelec = e.target.classList[0];
    console.log(botonSelec);
    titulo.innerHTML += botonSelec;
    console.log(titulo.innerHTML)
    audio.play();
})

$(".operador").on("click",function(e){
    num1 = titulo.innerHTML;
    titulo.innerHTML = "";
    switch (e.target.classList[0]) {
        case "suma":
            operador.innerHTML = num1 + " +";
            break;
        case "resta":
            operador.innerHTML = num1 + " -";
            break;
        case "producto":
            operador.innerHTML = num1 + " *";
            break;
        case "division":
            operador.innerHTML = num1 + " /";
            break;
        
    
        default:
            break;
    }
})

$(".delete").on("click",function(e){
    titulo.innerHTML = "";
    audio2.play();
})

$(".igual").on("click",function(e){
    num2 = titulo.innerHTML;
    
    switch (operador.innerHTML) {
        case num1 + " +":
            titulo.innerHTML = suma(num1,num2);
        break;
        case num1 + " -":
            titulo.innerHTML = resta(num1,num2);
        break;
        case num1 + " *":
            titulo.innerHTML = producto(num1,num2);
        break;
        case num1 + " /":
            titulo.innerHTML = division(num1,num2);
        break;
                
    
        default:
            break;
    }
    operador.innerHTML = "";
    audio3.play();
})


function suma (numero1, numero2){
    return parseFloat(numero1) +  parseFloat(numero2);
}
function resta (numero1, numero2){
    return parseFloat(numero1) -  parseFloat(numero2);
}
function producto (numero1, numero2){
    return parseFloat(numero1) *  parseFloat(numero2);
}
function division (numero1, numero2){
    var res = parseFloat(numero1) /  parseFloat(numero2);
    return res.toFixed(2) ;
}

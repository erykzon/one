let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []
let numeroMaximo = 9



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor')
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        intentos++
        limpiarCaja()
    }
    return
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Numeros posibles ya terminados')
    } else {
    //Si el numero generado esta incluido en la lista...
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto()
     } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
             }
         }
    }


function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Escoge un número del 1 al 9');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
    console.log(numeroSecreto)
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja()
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales()
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')

}

condicionesIniciales()
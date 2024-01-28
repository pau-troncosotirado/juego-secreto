//variables let
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maxJuegos = 5;
//console.log(numeroSecreto);

//declarar funciones
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //alert('Click desde el boton');
    //let numeroDeUsuario = document.querySelector('input');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroDeUsuario);
    //console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario === numeroSecreto);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', (`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`));
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon los numeros posibles');
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

// Llamar funciones
condicionesIniciales();

/*
//Ejericios clase2
(1) Crear una función que muestre "¡Hola, mundo!" en la consola.

function msjBienvenida(){
    let mensaje = '¡Hola, mundo!';
    console.log(mensaje);
    return;
}

//Otra opcion
function mostrarHola() {
  console.log("¡Hola, mundo!");
}

mostrarHola();

(2) Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function nombre() {
    let name = prompt('Escribe un nombre');
    let mensajeB = `¡Hola, ${name}!`;
    console.log(mensajeB);
    return;
}

// Otra opcion
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

mostrarHolaNombre("Alice");

(3) Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function dobleNum() {
    let num = prompt('Ingresa un numero');
    let doble = num * 2;
    console.log(`El doble de ${num} es: ${doble}`);
    return;
}

// Otra opcion
function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

(4) Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio() {
    let num1 = parseInt(prompt('Ingresa el primer numero'));
    console.log(typeof(num1));
    let num2 = parseInt(prompt('Ingresa el segundo numero'));
    let num3 = parseInt(prompt('Ingresa el tercer numero'));
    let prom = (num1 + num2 + num3)/3;
    console.log(`El promedio de ${num1}, ${num2}, ${num3}, es igual a: ${prom}`);
    return;   
}

// Otra opcion
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);

(5) Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numMayor() {
    let num1 = parseInt(prompt('Ingresa el primer numero'));
    console.log(typeof(num1));
    let num2 = parseInt(prompt('Ingresa el segundo numero'));
    if(num1 > num2){
        console.log(`El numero mayor de ${num1} y ${num2} es: ${num1}`)
    } else {
        console.log(`El numero mayor de ${num1} y ${num2} es: ${num2}`)
    }
}

//Otra opcion
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

(6) Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function multiplicarNum() {
    let num = prompt('Ingresa un numero');
    let multi = num * num;
    console.log(`El resultado de multiplicar ${num} por sí mismo, es: ${multi}`);
    return;
}

//Otra opcion
function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);

Ejercicios clase3
(1) Crea una función que calcule el índice de masa corporal (IMC) de una persona 
a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.

function imc(altura, peso) {
    return peso / (altura * altura);
}

let masa = imc(1.50, 55);
console.log(masa);

(2) Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 4;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);

(3) Crea una función que convierta un valor en dólares, 
pasado como parámetro, y devuelva el valor equivalente en 
reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80.

function convertirDolaresAPesoMx(dolares) {
  let cotizacionDolar = 17.15;
  let pesoMx = dolares * cotizacionDolar;
  return pesoMx;
}
// Ejemplo de uso
let valorEnDolar = 20;
let valorEnPesoMx = convertirDolaresAPesoMx(valorEnDolar);
console.log(`${valorEnDolar} dólares en peso mexicano son $ ${valorEnPesoMx}`);

(4) Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.

function areaPerimetro(alto, ancho) {
    let area = alto * ancho;
    let perimetro = 2 * (alto + ancho);
    console.log(`Area: ${area}`);
    console.log(`Perimetro: ${perimetro}`);
}

let alto = 5;
let ancho = 8;
areaPerimetro(alto, ancho);

(5) Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaPerimetroCircular(radio) {
    let pi = 3.14;
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;
    console.log(`Area: ${area}`);
    console.log(`Perimetro: ${perimetro}`);
}

let radio = 6;
areaPerimetroCircular(radio);

(6) Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);

Desafios:

(1) Crea una lista vacía llamada "listaGenerica".

let listaGenerica = []; 

(2)
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 
'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Phyton'];
console.log(lenguajesDeProgramacion); 

(3)Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Phyton'];
lenguajesDeProgramacion.push('Java','Ryby','GoLang');
console.log(lenguajesDeProgramacion);

(4) Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Phyton'];
lenguajesDeProgramacion.push('Java','Ryby','GoLang');
//console.log(lenguajesDeProgramacion);

//llamar funciones
mostrarLista();

function mostrarLista() {
    console.log(lenguajesDeProgramacion); 
}

//Otra opcion
function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesSeparadamente();

(5) Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Phyton'];
lenguajesDeProgramacion.push('Java','Ryby','GoLang');
//console.log(lenguajesDeProgramacion);

//llamar funciones
mostrarListaInverso();

function mostrarListaInverso() {
    lenguajesDeProgramacion.reverse();
    console.log(lenguajesDeProgramacion);
}

// otra opcion
function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesReversoSeparadamente();

(6) Crea una función que calcule el promedio de los elementos en una lista de números.

let listaNumeros = [10, 8, 8, 6];

//llamar funciones
promedioNumeros();

 function promedioNumeros() {
    let sum = listaNumeros.reduce((a, b) => a + b, 0);
    prom = sum/listaNumeros.length;
    console.log(prom);
}

//Otra opcion
function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);

(7) Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

let listaNumeros = [16,11,33,55,18,77,84,3,31,44,63,4,2,10,81,22,14,20,23,24,27];

Array.prototype.max = function() {
  return Math.max.apply(null, this);
}

Array.prototype.min = function() {
  return Math.min.apply(null, this);
}

console.log(`El numero mayor del arreglo es: ${listaNumeros.max()} y el menor es: ${listaNumeros.min()}.`);

//otra opcion
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

(8) Crea una función que devuelva la suma de todos los elementos en una lista.

let listaNumeros = [10,10,10,6];

//llamar funciones
sumaNumeros();

 function sumaNumeros() {
    let suma = listaNumeros.reduce((a, b) => a + b, 0);
    console.log(suma);
}

//Otra opcion
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);

(9) Crea una función que devuelva la posición en la lista donde 
se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista. 

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

(10) Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.

let lista1 = [10,10,10,2];
let lista2 = [10,10,10,2];
let resultado = [];

sumaArreglos();

function sumaArreglos(){
    for(i = 0; i < lista1.length; i++){
  resultado[i] =lista1[i]+lista2[i];
}

console.log(resultado);
}

(11) Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

let listaNumeros1 = [2,4,6,8];
let resultado = [];

alCuadrado();

function alCuadrado() {
    for(i = 0; i < listaNumeros1.length; i++){
    resultado[i] = Math.pow(listaNumeros1[i],2);
    }

    console.log(resultado);
}

*/














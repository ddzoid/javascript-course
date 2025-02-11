<<<<<<< HEAD


/**
 * Función que recibe la temperatura y devuelve un mensaje:
 * Si la temperatura es = 22 grados: La temperatura de 22 grados es ideal
 * Si la temperatura es de 15 a 21 grados: La temperatura de 14 grados es fresca.
 * Si la temperatura es menor a 15 grados: La temperatura de 8 grados es fria
 * Si la temperatura es mayor a 22 grados: La temperatura de 30 grados es calurosa y le gustaría a Nan
 * @param {number} temperatura
 * @returns {string} mensaje
 */

function juzgarTemperatura(temp) {
    if (temp === 22) {
        return `La temperatura de ${temp} grados es ideal`;
    } if (temp >= 15 && temp <= 21) {
        return `La temperatura de ${temp} grados es fresca`;
    } if (temp < 15) {
        return `La temperatura de ${temp} grados es fría`;
    } if (temp > 22) {
        return `La temperatura de ${temp} grados es calurosa`;
    }
};

console.log(juzgarTemperatura(30));
console.log(juzgarTemperatura(22));
console.log(juzgarTemperatura(19));
console.log(juzgarTemperatura(13));


/* Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 */

const evaluarVelocidad = (velocidad) => {
    if (velocidad === 0) {
        return (`El ventilador esta apagado`);
    } if (velocidad === 1) {
        return (`El ventilador esta en velocidad baja`);
    } if (velocidad === 2) {
        return (`El ventilador esta en velocidad media`);
    } if (velocidad === 3) {
        return (`El ventilador esta en velocidad alta`);
    } else {
        return (`Velocidad desconocida`);
    }
};

console.log (evaluarVelocidad (4));

let velocidad = 2

function decirVelocidad (velocidad) {
    switch (velocidad) {
        case 0:
            return `El ventilador esta apagado`;
        case 1:
            return `El ventilador esta en velocidad baja`;
        case 2:
            return `El ventilador esta en velocidad media`;
        case 3:
            return `El ventilador esta en temperatura alta`;
        default:
            return `Velocidad desconocida`;
    }
};

console.log (decirVelocidad (2));

/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */

function evaluarEdad (edad) {
    switch (edad) {
        case (edad >= 18):
            return `Eres mayor de edad`;
        default:
            return `Eres menor de edad`;
    }
};

console.log(evaluarEdad (2));

function verificarEdad (edad) {
    if (edad >= 18) {
        return `Eres mayor de edad`;
    } else {
        return `Eres menor de edad`;
    }
};

console.log(verificarEdad (20));


// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/
let mes = Number(prompt("Ingresa un número de mes (1 al 12):"));

const arrojarEstacionAno = mes => {
    switch (mes) {
        case 12:
            return (`Estamos en invierno`)
        case 1:
            return (`Estamos en invierno`)
        case 2:
            return (`Estamos en invierno`)
        case 3:
            return (`Estamos en primavera`)
        case 4:
            return (`Estamos en primavera`)
        case 5:
            return (`Estamos en primavera`)
        case 6:
            return (`Estamos en verano`)
        case 7:
            return (`Estamos en verano`)
        case 8:
            return (`Estamos en verano`)
        case 9:
            return (`Estamos en otono`)
        case 10:
            return (`Estamos en otono`)
        case 11:
            return (`Estamos en otono`)
        default:
            return (`Por favor ingrese un numero valido`)

    }
};

alert(arrojarEstacionAno (mes));




function decirEstacionAno (mes) {
    if (mes >= 3 && mes <= 5) {
        alert(`Estamos en primavera`);
    } else if (mes >= 6 && mes <= 8) {
        alert(`Estamos en verano`);
    } else if (mes >= 9 && mes <= 11) {
        alert(`Estamos en otono`);
    } else if (mes === 12 || mes === 1 || mes === 3){
        alert(`Estamos en invierno`);
    } else {
        alert(`Ingresa un numero valido`);
    }
};

decirEstacionAno(mes);

let season = Number(prompt("¿Escribe el mes en curso (1-12) ?"));
const estAño = (season) => {
    if (season >= 3 && season <= 5) {
        return "Primavera 🌻";
    } else if (season >= 6 && season <= 8) {
        return "Verano 🏖️";
    } else if (season >= 9 && season <= 11) {
        return "Otoño 🍂";
    } else if (season === 12 || season === 1 || season == 2) {
        return "Invierno ⛄";
    } else {
        return "Número de mes no válido ❌";
    }
}; 
// alert( estAño(season) );

// =================================================
// El método slice crea una copia superficial de un fragmento de un array y devuelve un nuevo array.

const pasteles = ["Pastel de Chocolate", "Pastel de Zanahoria", "Pastel de Limón"];

const eliminarPastel = ( array, indice ) => {
    const copyArray = array.slice();    
    const pastelEliminado = copyArray.splice(indice, 2);
    console.log( copyArray ); // ["Pastel de Chocolate", "Pastel de Limón"]
    return pastelEliminado;
}

eliminarPastel( pasteles, 1); 
console.log( pasteles ); // ["Pastel de Chocolate", "Pastel de Zanahoria", "Pastel de Limón"]

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

*/
const nombres = ["Juan", "Pedro", "María", "Ana"];
for ( let index = 0; index < nombres.length; index++ ){
    console.log( nombres[index] ); // Juan, Pedro, María, Ana
}
console.log( "Me muestro en consola, muchas veces?" ); // Se muestra una vez en la consola

// ============ Iterar un  arreglo y mostrar los elementos como una lista ============

const gelatinas = ["Fresa", "Limon", "Naranja", "Uva"];
const gelatinasLista = [];

for ( let index = 0; index < gelatinas.length; index++ ) {
    gelatinasLista.push(`<li> ${ gelatinas[index] } </li>`);
}

console.log( gelatinasLista ); 
/* 
  [
   "<li> Fresa </li>", 
   "<li> Limon </li>", 
   "<li> Naranja </li>", 
   "<li> Uva </li>"
   ]
*/

// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];

for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);    
}

for ( const color of colores ) {
    console.log( color );
}

// ---------------------- Ejercicio con for of ---------------------
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 */

const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];

const listarDesordenadamente = (array) => {
        for ( const cantante of cantantes ) {
            console.log (`<li><ul> ${ cantante } </ul></li>`);
        }
}

listarDesordenadamente (cantantes, 0);

const refListaCantantes = document.getElementById("cantantes-lista");

const generarListaCantantes = (cantantesArray) => {
    const cantantesLista = [];
    for (const cantante of cantantesArray) {
        cantantesLista.push(`<li>${cantante}</li>`);
    }
    return cantantesLista.join("");
}

const listItemsOfCantantes = generarListaCantantes(cantantes);

// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

// ------------------- Uso de break y label en ciclos anidados ----------------------------
multiplicando:
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando;
    }

}

 // ============ Ejercicio mental =============================
 let myIteration; 

 for (myIteration = 0; myIteration <= 5; myIteration++) {
     console.log("For loop", myIteration ); //  
 }
 console.log("Final", myIteration); // 

 /**
 * Modificar elementos por su tag(etiqueta HTML)
 */
const changeElementsByTagName =  () => {
    const listItems = document.getElementsByTagName("li");
    console.log( listItems );

for( let item of listItems){
    item.innerText = "Mi nuevo li"
}
 

 }
 
 changeElementsByTagName ();

/**
 * Acceder a un elemento usando el selector universar
 */
const getElementsByQuerySelector = () =>{
    // document.getElementById("descripcion-operadores");
const element = document.querySelector("#test-manipulacion");
console.log(element);

const elementParagraph = document.querySelector("p"); // Seleccionar el primer paragraph que se encuentre    
console.log( elementParagraph );

const classTextStart = document.querySelector(".text-center"); // Seleccionar el primer elemento con la clase text-center
console.log( classTextStart );

}

getElementsByQuerySelector();

/**
* Acceder a varios elementos usando el selector universal
* 
*/
const getListItemsByQuerySelector = () =>{
// const listItems = document.querySelectorAll("main li");
const otraLista = document.querySelectorAll(".text-start li");
console.log( otraLista );
}

getListItemsByQuerySelector();

// ----------------------- Ejercicio ----------------------------------
// Seleccionar la imagen de dinosaurio que se muestra.
// mostrar en consola el objeto

const getImagenDinosaurio = () =>{
    const imagenDinosaurio = document.querySelector("main img");
        return imagenDinosaurio;
    }
    
// Cambiar la imagen de dinosaurio a la imagen web-developer
const changeImage = () => {
    const refImage = getImagenDinosaurio();
    refImage.src = "./public/images/cat_hangover_relax_213869.jpg";
    refImage.alt = "gatito descansando";
}

changeImage();
=======
console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

console.log( saludar("Erick") );
console.log( saludar("Serch") );
console.log( saludar("Arely") );

function saludar( nombre){
    return `Hola ${nombre}, soy una función declarada`;
}
// En la función anterior saludar()
// Agregar el parámetro nombre y mostrar "Hola nombre, soy una función declarada"


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

// console.log( sumarDosNumeros(3,6) ); //  Cannot access 'sumarDosNumeros' before initialization

// Realizar una función declarada que sume dos números, retorna el resultado de la suma
const sumarDosNumeros = function suma(num1, num2){
    return num1 + num2;
};

console.log( sumarDosNumeros(3,6) ); // 9

let hora = 16;
let saludarDependiendoHora;

if(hora < 12){
    saludarDependiendoHora = function(){
        return "Buenos días";
    };
} else {
    saludarDependiendoHora = function(){
        return "Buenas tardes";
    };
}

console.log( saludarDependiendoHora() ); 

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/
( function setUp( name ) {
    console.log(`Hola ${name}, soy una función autoinvocada`);
})( "Erick" );


/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

//Realizar una función declarada que calcule el área de un rectángulo
function areaRectangulo(ladoA, ladoB){
    return ladoA*ladoB;
}
// Convertir la funcion anterior a una función expresada
const calcularAreaRectangulo = function(base, altura) { return base * altura; };

// Convertir la función anterior a una función flecha
const rectangleArea = (height, width) => height * width;

console.log(`El área del rectángulo es : ${rectangleArea(10, 6)} cm2`);


/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

const saludarPersona = nombre => `Hola ${nombre}, bienvenido`;

const saludarPersonaConDefaultParameters = (nombre = "Invitado/a") => `Hola ${nombre}, bienvenido`;

console.log( saludarPersona() ); // Hola undefined, bienvenido
console.log( saludarPersona("Serch") ); // Hola Serch, bienvenido
console.log( saludarPersona("Valeria") ); // Hola Valeria, bienvenido

console.log( saludarPersonaConDefaultParameters() ); // Hola Invitado/a, bienvenido
console.log( saludarPersonaConDefaultParameters("Serch") ); // Hola Serch, bienvenido
console.log( saludarPersonaConDefaultParameters("Valeria") ); // Hola Valeria, bienvenido

// Realizar una función que tenga de parámetros el nombre y cohorte
// Los valored por default de los parámetros son nombre= "participante" cohorte= "cohorte de Generation"
// Retornar el mensaje "Hola participante, bienvenido/a a la cohorte de Generation"
// Retornar el mensaje "Hola Dae, bienvenido/a a la cohorte Ch50"
const nombreCohorte = (nombre = "participante", cohorte = "cohorte de Generation") => `Hola ${nombre}, bienvenido/a a la ${cohorte}.`;

console.log(nombreCohorte()); // Hola participante, bienvenido/a a la cohorte de Generation
console.log(nombreCohorte("Paul", "CH50")); // Hola Paul, bienvenido/a a la cohorte CH50

console.log( parseInt("faba") ); // NaN
console.log( parseInt("faba", 10) ); // NaN
// base decimal(10 dígitos): 0,1,2,3,4,5,6,7,8,9
// base hexadecimal(16 dígitos): 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
// base octal(8 dígitos): 0,1,2,3,4,5,6,7
// base binaria(2 dígitos): 0,1
console.log( parseInt("faba", 16) ); // 64186 valor decimal de la base hexadecimal


/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 // Arrow function que reciba un parámetro y lo imprima en consola
 const mensajeConsola = mensaje => console.log(mensaje);

 /** 
  Arrow function que reciba un parámetro y lo imprima con alert
  @param {string} mensaje mensaje a imprimir
 */ 
 const mensajeAlert = mensaje => alert(mensaje);

 const mensajeTitulo = mensaje => document.getElementById("title").innerText = mensaje;

 /**
  * Función que imprime en consola o alert un mensaje.
  * @param {string} mensaje mensaje a imprimir
  * @param {string} opcion "consola" o "alert" el destino a imprimir 
  */
 const imprimirMensaje = (mensaje = "Hola", opcion = "consola") => {
    if (opcion === "consola") {
      mensajeConsola(mensaje);
    } else if (opcion === "alert") {
      mensajeAlert(mensaje);
    } else if (opcion === "titulo") {
      mensajeTitulo(mensaje);
    }
  };

  // imprimirMensaje("Hola Lisset", "alert");
  // imprimirMensaje("Hola Serch", "alert");
  imprimirMensaje("Hola Kati");
  imprimirMensaje("Hola Kati", "titulo");
  

// Usar función de callback del ejercicio anterior
const imprimirMensajeConCallback = (mensaje, funcionCallback ) => funcionCallback( mensaje );

imprimirMensajeConCallback("Hola Erick", mensajeConsola );
imprimirMensajeConCallback("Hola Erick", mensajeTitulo );
// imprimerMensajeConCallback("Hola Erick", 589 ); // funcionCallback is not a function


// ============================ Pase por valor =================

let colorPintura = "rojo";

function cambiarColorPintura(color){
  console.log(`El color que llega a la función es ${color}`); // rojo
  color = "azul";
  console.log(`El color de la pintura que imprime la función es ${color}`); // azul
  return color;
}

cambiarColorPintura(colorPintura);
console.log(`El color de la pintura final es ${colorPintura}`); // rojo


// ============================ Pase por referencia =================

const colores = ["rojo", "azul", "verde"];

function cambiarColorArreglo(arreglo){
  console.log(`El arreglo que llega a la función es ${arreglo}`); // "rojo", "azul", "verde"
  arreglo[0] = "negro";
  console.log(`Se imprimen los colores en la función: ${arreglo}`); // "negro", "azul", "verde"

}

cambiarColorArreglo( colores );
console.log(`Los colores finales dentro del arreglo son: ${colores}`); // "negro", "azul", "verde"

// =============================== Método sort() =====================================

const series = ["Winnie", "Arnold", "avengers" ,"Atreve", "Digimon", "Naruto"];
console.log( series.sort() ); // ['Arnold', 'Atreve', 'Digimon', 'Naruto', 'Winnie', 'avengers']

const numeros = [ 122, 2, 1, 55]; 
console.log( numeros.sort() ); // [1, 122, 2, 55]

const ordenarNumeros = ( numA, numB) => {
  if( numA < numB ){
     return -1; // numA va antes que numB
  } else if( numA > numB ) {
     return 1; // numA va después que numB
  } else { // Los números son iguales
    return 0
  }
}

console.log( ordenarNumeros( 3,6 ) ); // -1
console.log( ordenarNumeros( 6,3 ) ); // 1
console.log( ordenarNumeros( 3,3 ) ); // 0

const numbers = [  1,   10,   3,   100,   5];
console.log( numbers.sort( ordenarNumeros ) ); //  [1, 3, 5, 10, 100]
//  [1,10     3,100,5];
//  [1,3     10,100,5];
//  [1,3,10,100   ,5 ];
//  [1,3,10,5,   100 ];
//  ... después de repetir las iteraciones nuevamente
//  [1,3,5,10,,100 ];

const ordenarNumerosSimplificado = ( numA, numB) => numA - numB;
const otrosNumeros = [  1,   10,   3,   100,   5];
console.log( otrosNumeros.sort( ordenarNumerosSimplificado ) ); //  [1, 3, 5, 10, 100]

const numerosDeLaSuerte = [  7,   21,   14,   28,   35];
console.log( numerosDeLaSuerte.sort( (a,b)=> a-b ) ); // orden ascendente 7, 14, 21, 28, 35
console.log( numerosDeLaSuerte.sort( function(a,b){return a-b} ) ); // orden ascendente 7, 14, 21, 28, 35

// Ordenar de forma descendente los siguientes números:
const numCh50 = [19, 15, 13, 18, 5];
console.log(numCh50.sort((numA, numB) => numB - numA )); // 19, 15, 13, 18, 5
>>>>>>> 57819e3b55c86a4dcd696165d0aa5ce2e0d53d09

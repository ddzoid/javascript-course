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

- Nombre descriptivo: Debe indicar claramente lo que hace
    Se recomienda comenzar con un verbo.
- Parametros: Debe tener cero o mas parametros, separados por coma.
 Se recomienda no tener mas de 3 parametros. En las pruebas unitarias, se les da valor a diferentes entradas. Es dificil verificar codigo que tenga mas de 3 parametros.
 -Seguir el principio SOLID, sobre el principio de responsabilidad unica (Single Responsability Orinciple(. Una cosa debe tener una unica funcion.))
 Retorno: Debe retornar un valor o undefined.
 - Evitar efectos secundarios: Una funcion no debe modificar variables externas. Se pierdee el tiempo saltando de codigo en codigo (?)
 
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
Puede tenerse antes y despues declararse. 
 Caja negra.
*/

console.log ( saludar () );

function saludar (  nombre){
    return `Hola ${nombre}, soy una funcion declarada`;
}

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

// Realizar una función declarada que sume dos números, retorna el resultado de la suma

console.log(suma(8,9));
function suma(num1, num2){
    return num1 + num2;
}


//
// La expresion de la funcion no se eleva
// Para usar la funcion hay que usar el nombre de la variable

// Podemos dejar el nombre o poner una funcion anonima. Hoisting?


// Las funciones declaradas tienen hoisting. Esto puede dificultar la homologacion.
// Las funciones expresadas siempre deben estar arribas y se leen conforme vayan llegando las lineas.

// Realizar una función declarada que sume dos números, retorna el resultado de la suma
const sumarDosNumeros = function suma(num1, num2){
    return num1 + num2;
};
console.log( sumarDosNumeros(3,6) ); // 9
let hora = 10;
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
saludarDependiendoHora();

// Esto solo puede hacerse con funciones expresadas, no declaradas.
// Es probable que no usemos funciones declaradas, pues estas evolucionaron a arrowfunctions.

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.
sintaxis:
   ( function (parámetros ){} )( argumentos );
*/


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

const saludarPersona = (nombre = "Invitado") => `Hola {}`

const saludarPersonaConDefaultParameters = (nombre) => `Hola ${nombre}, bienvenido`;

// Realizar una función que tenga de parámetros el nombre y cohorte
// Los valored por default de los parámetros son nombre= participante cohorte= "cohorte de Generation"
// Retornar el mensaje "Hola nombre, bienvenido/a a la cohorte de Generation"
// Retornar el mensaje "Hola Dae, bienvenido/a a la cohorte Ch50"

const saludarCohorte = (nombre) => `Hola ${nombre}, bienvenido/a a la cohorte de Generation`;

const saludarCohorteConDefaultParameters = (nombre = "participante") => `Hola ${nombre}, bienvenido/a a la cohorte CH50 de Generation`;

console.log(saludarCohorteConDefaultParameters () ); 
console.log(saludarCohorteConDefaultParameters ("Mitzan", "CH50") ); 
console.log(saludarCohorteConDefaultParameters ("Jael", "CH50") ); 

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

 // Arrow function que reciba un parámetro y lo imprima con alert


const mensajeConsola = mensaje => console.log(mensaje);
const mensajeAlert = mensaje => alert(mensaje);

// Si solo es un parametro podemos omitir los parentesis. 
// Nunca retornar console log.

/**
  * Función que imprima en consola o alert un mensaje.
  * @param {string} mensaje mensaje a imprimir
  * @param {string} opcion "consola" o "alert" el destino a imprimir 
  */

function mensajeImprimirAlert = alert(mensaje, opcion); {
    if (opcion === "consola") {
        alert(mensaje);
    }
}

  }
//Dentro de una funcion se puede invocar otras funciones.
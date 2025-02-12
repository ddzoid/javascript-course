

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

const changeElementsByTagName =  () => {
    const listItems = document.getElementsByTagName("li");
    console.log( listItems );

for( let item of listItems){
    item.innerText = "Mi nuevo li"
}
 

 }
 
 changeElementsByTagName ();


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


const imagenPrincipal = getImagenDinosaurio();
imagenPrincipal.style.cursor = "pointer";
// Agrega una función que esté escuchando y ejecute un evento. Parámetros: evento, callback (función que querermos que se ejecute cuando termina ese evento)
// imagenPrincipal.addEventListener( evento, callback)
// imagenPrincipal.addEventListener( "click", () -> {} );
imagenPrincipal.addEventListener( "click", changeImage );


<<<<<<< HEAD
/**

 * Validar si el nombre ingresado es válido

 * @param {string} name 

 * @return {boolean} valor true indica que el nombre es válido

 */

// checkNameInput.js

export const checkNameInput = (filePath) => {
    return filePath.split("/").pop();
};



/**

 *  TDD

 *  TDD (Test-Driven Development) es una metodología de desarrollo 

 *  de software donde las pruebas unitarias se escriben antes del 

 *  código de producción.

 * 

 *  Ventajas de TDD: 

 *  - Te obliga a pensar en los requerimientos antes de codificar.

 *  - Mejora la calidad del código al asegurar que está cubierto por pruebas.

 *  - Facilita la detección de errores rápidamente.

 * 

 */

=======

/**
 * Validar si el nombre ingresado es válido
 * @param {string} name 
 * @return {boolean} valor true indica que el nombre es válido
 */
const checkNameInput = ( name ) =>{
    let check = true;
    if(name === undefined || name === null){
        check = false;
    } else if(name.length < 2) {
        check = false;
    }else if(name[0] === " "){
        check = false;
    }else if(!isNaN(Number(name))){
        check = false;
    } else {
        check = true;
    };
        return check;
}

export { checkNameInput };
>>>>>>> b56b36f6ab4158f019677218893525f2310129ef


/**

 * Obtener el nombre de la página HTML

 * @param {string} filePath url del archivo html    

 * @returns el nombre de la página html

 */

const getHtmlPageName = ( filePath ) => {
    return filePath.split("/").pop();
}

export { getHtmlPageName };

/*

 * - Expect te da acceso a un número de marcadores que te permiten validar diferentes cosas.

 * - Los matchers en Jest son funciones que permiten comparar valores esperados con valores reales en los tests

 * - toBe(): compara con igualdad estricta (===) 

 */
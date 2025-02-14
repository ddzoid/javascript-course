<<<<<<< HEAD
// test( "descripción de la prueba", ()=>{}

import { getHtmlPageName } from "../../../src/modules/header/getHtmlPageName.js";

    test( "Debería retornar el nombre de la página html", ()=>{
        const filePath = "src/pages/home.html";

    const expected = "home.html";

    const result = getHtmlPageName( filePath );

    expect( result ).toBe( expected );
    } );

       /*

 * - Expect te da acceso a un número de marcadores que te permiten validar diferentes cosas.

 * - Los matchers en Jest son funciones que permiten comparar valores esperados con valores reales en los tests

 * - toBe(): compara con igualdad estricta (===) 

 */

       // test( "descripción de la prueba", ()=>{} );

test ("Debería retornar el nombre de la página html", ()=>{

    

    const filePath = "src/pages/home.html";

    const expected = "home.html";

    

    const result = getHtmlPageName( filePath );

  

 /*

 * - Expect te da acceso a un número de marcadores que te permiten validar diferentes cosas.

 * - Los matchers en Jest son funciones que permiten comparar valores esperados con valores reales en los tests

 * - toBe(): compara con igualdad estricta (===) 

 */

    expect( result ).toBe( expected );

    expect( getHtmlPageName("/index.html") ).toBe( "index.html" );

    expect( getHtmlPageName("/") ).toBe( "" );

    expect( getHtmlPageName("") ).toBe( "" );

} );
=======
import { getHtmlPageName } from "../../../src/modules/header/getHtmlPageName.js";


// test( "descripción de la prueba", ()=>{} );
test ("Debería retornar el nombre de la página html", ()=>{
    
    const filePath = "src/pages/home.html";
    const expected = "home.html";
    
    const result = getHtmlPageName( filePath );
  
 /*
 * - Expect te da acceso a un número de marcadores que te permiten validar diferentes cosas.
 * - Los matchers en Jest son funciones que permiten comparar valores esperados con valores reales en los tests
 * - toBe(): compara con igualdad estricta (===) 
 */
    expect( result ).toBe( expected );
    expect( getHtmlPageName("/index.html") ).toBe( "index.html" );
    expect( getHtmlPageName("/") ).toBe( "" );
    expect( getHtmlPageName("") ).toBe( "" );

} );
>>>>>>> b56b36f6ab4158f019677218893525f2310129ef

/*

 Tipos de datos de JavaScript:

 - Objetos y primitivos

 - Los datos primitivos:

    * string

    * boolean

    * number

    * null

    * undefined

    * bigint

    * symbol

    > son inmutables, no tienen atributos ni métodos

- Objetos:

     tipo object

    {clave: valor, edad: 25, name: "pitufina"}

     tipo array

    [element_1 , element_2 , "Pitufinas", 38, {}, {}  ]

*//*

 Tipos de datos de JavaScript:

 - Objetos y primitivos

 - Los datos primitivos:

    * string

    * boolean

    * number

    * null

    * undefined

    * bigint

    * symbol

    > son inmutables, no tienen atributos ni métodos

- Objetos:

     tipo object

    {clave: valor, edad: 25, name: "pitufina"}

     tipo array

    [element_1 , element_2 , "Pitufinas", 38, {}, {}  ]

*/
// ================= Datos primitivos ==================
/*

 string: tipo de dato que rpresenta una secuencia de caracteres.

  Puede incluir textos, números, espacios, símbolos. Siempre se 

  define entre comillas.

 

*/
console.log("Kati seria unas pantuflas") // Mensajes. Para strings, se puede usar comillas dobles, simples y backticks (Template Literals) 
console.log(``)

/*

- String template literals ` ` (backtick) 

  Es una forma más flexible y legible de trabajar con cadenas 

  de texto. Utilizan comillas invertidas (``) en lugar de 

  comillas simples o dobles y permiten incrustar expresiones

  dentro de la cadena utilizando la interpolación ${}.

*/

// Mostrar en console "El resultado de 3 * 4 = 12 pesos"

let valor1 = 3;

let valor2 = 4;

console.log("El resultado de " + valor1 + "*" + valor2 + " = " + valor1 + valor2); // Concatenacion
console.log(`El resultado de ${valor1} * ${valor1*valor2} pesos.`); // Extrapolacion

/*

 Tipos de datos number.

 - números positivos: 100, 1, 0.258

 - números negativos: -1 , .50.35

 - valores que no pueden ser representados numéricamente: NaN

 - número infinitos: +Infinity, -Infinity

*/

console.log( typeof 3.141592 ); // 'number'

console.log( typeof (3*3)  ); // 'number'

console.log( typeof "" ); // 'string' empty string

console.log( typeof " " ); // 'string'

console.log( 3*"pitufo trabajador" ); // NaN

console.log( typeof ( 3 * "pitufo trabajador") ); // 'number'

console.log( typeof (NaN) ); // 'number'

console.log( typeof +Infinity ); // 'number'

console.log( typeof ( 3 + "Viernes temático" ) ); // 'string'

console.log( typeof ( "3Viernes temático" ) ); // 'string'

console.log( 4 /0 ); // +Infinity

/*

 Cuando se realizan operaciones que exceden los límites

 de MAX_SAFE_INTEGER se produce una pérdida de precisión.

 Perdida precisión: No se pueden representar exactamente ciertos valores.

  típicamente en operaciones de números de punto flotate.

*/

console.log( `Pérdida de precisión: 0.1 + 0. 2 = ${ 0.1 + 0.2 }`); // 0.30000000000000004
console.log( `Valor entero seguro en JavaScript: ${Number.MAX_SAFE_INTEGER} `); // 9007199254740991


console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); 

console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); 

console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); 

console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); 

console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`);

/*

 Tipos de datos BigInt

 Sirve para representar valores numéricos enteros, de los que el

 tipo number no pueda representar o no es seguro.

 Las operaciones con un bigInt se debe hacer con otro bigInt.
 
 La desventaja es que opera con la memoria y tarda mas en hacer operaciones.

*/

const myBigInt = 9007199254740991n;

console.log( typeof myBigInt ); // bigint
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1 }  `); // El segundo no es un BigInt
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1n }  `);




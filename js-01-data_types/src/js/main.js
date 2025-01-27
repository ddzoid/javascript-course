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

console.log("El resultado de " + valor1 + "*" + valor2 + " = " + valor1 + valor2);
console.log(`El resultado de ${valor1} * ${valor1*valor2} pesos.`);




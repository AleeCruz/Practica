console.log("\n\n-----------------------Operadores Aritmeticos------------\n\n\n\n\n")

//Se respeta la precedencia de matematicas en programacion

let a = 5 +(5-10)*3;
let modulo = 5/2;



console.log(a)
console.log(modulo)
modulo = 5%2;
console.log(modulo)



/**Vamos a ver los operadores Relacionales
 * > >= < <= == === != !==
 */

console.log(8>9)//false
console.log(9>8)//true
console.log(8>=9)//false
console.log(9>=8)//true
console.log(7<7)///false
console.log(7<=7)//true


/**Ahora veremos los operadores de asignacion los de comparacion y los de comparacion estrictos */
/**nos referimos a 
 * = asignacion
 * == comparacion
 * ===comparacion estricto
 */



//Veremos la comparacion entre 2 iguales que solo comparan los valores pero no el tipo de dato
//==
console.log("\n\n---------------Resultados de valores no estrictos----------\n\n")
console.log(7==7)//true
console.log('7'== 7)//true
console.log(0==false)//true

console.log("\n\n---------------Resultados de valores estrictos-----------\n\n")
console.log(7===7)
console.log("7"===7)
console.log(0===false)


/**Veremos los operadores de incremento o decremento */
/**let i =1;

i-=5;

console.log(i)
*/
console.log("\n\n------Viendo ejemplos de operadores unarios i++ e ++i\n\n")
let i=5;

i++;
console.log(i)


i=10
//Vemos los ejemplos de i++ y de i--
console.log(i++)

i = 20;
console.log(++i)





/**------Veremos ejemplos de los operadores unarios  */
console.log("\n\n--------Resultados de los operadores unarios i-- e --i\n\n")
let j=9;
j--
console.log(j)


j=30;
console.log(j--)


j=54;
console.log(--j)



/**---------------Operadores Logicos ------------ */

/**
 * ! Not niega cualquier declaracion
 * || OR con tal de que se cumpla alguna de las condiciones basta para que sea verdadera 
 * && Operador logico Y es necesario que ambas sean verdaderas para que sea verdadera
 */

console.log("\n\n--------Veremos el operador logicos \n\n")

console.log(!true)
console.log(!false)

console.log((9===9)||(9==='9'))
console.log((9===9)&&(8==='8'))









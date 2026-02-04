console.log("\n\n------------Ejercicio numero uno------------")
/**Reto 1: El Validador de Tipos
Jon hace mucho énfasis en saber qué estamos manejando.

Consigna: Crea 3 variables de diferentes tipos (una cadena, un número y un booleano).

Tarea: Crea una lógica que imprima en la consola: "El valor [valor] es de tipo [tipo]" para cada una, usando typeof.

Extra: Intenta sumar el número con la cadena y explica en un comentario qué pasó (Coerción de tipos). */

let nombre = "ALexander"
let verdadero = true;
let numero = 1122340121

console.log(`EL valor de ${nombre} es de tipo ${typeof(nombre)}`)
console.log(`EL valor de ${verdadero} es de tipo ${typeof(verdadero)}`)
console.log(`El valor de ${numero} es de tipo ${typeof(numero)}`)

//Extra vamos a sumar 
console.log(numero +nombre)
//Esta sucediendo una concatenacion de un numero con un string
console.log("-------Estructuras de control repetitivas----------")

let contador =0;



while (contador<=8){
    console.log("Contador vale: "+contador)
    contador++;
}


//Ahora vamos a realizar la estructura do-while
console.log("\n\n--------------Estructuras de contol do while")
do {
    console.log("contador: "+contador)
    contador++
} while (contador <10);

console.log("\n\nVAlor de contador desde cero\n\n")
console.log(contador)

console.log("\n\n")

for (let i=0;i<10;i++){
    console.log("Valor de i: "+i)
}

//Ahora vamos a crear un areglo de numeros y recorrerlos con un for 


console.log("\n\nVamos a realizar un recorrido por un arreglo  con el for \n\n")
let numeros =[1,2,3,4,5,6,7,8,9,10];

for (let j=0;j<numeros.length;j++){
    console.log(`Numero: ${j}: ${numeros[j]}`)
}



//Vamos a ver un par de variantes de loop en javascript 

//Teoria del bucle for in que sirve para recorrer objetos  
/**Puntualmente recorre las llaves o indices de un objeto ademas que busca las propiedades */

//vamos a crear primero un objeto denomindado ususario 


const usuario={
    nombre: "ALexander",
    apellido: "Cruz",
    gmail: "GammaStream",
    
}

for (const propiedad in usuario) {
    console.log(propiedad);
    console.log(usuario[propiedad]) 
}

//Podriamos mejorar el uso del for in de la siguiente manera

//Creando otro objeto 

const tienda ={
    nombre: "GammaStream",
    edad: 10,
    localidad: "Buenos Aires",
    pais: "Argentina",
    precio: 1234.89
}


//Vamos a realizar un recorrido de el siguiente objeto nuevo

console.log("\n\nRecorrido del nuevo objeto\n\n")


for (const atributo in tienda) {
    console.log(`${atributo}: ${tienda[atributo]}`)
    
}




//Vamos a crear otro objeto y realizando el recorrido con el lop forin


console.log("\n\n------------Vamos a realizar un recorrido a u objeto con forin--------\n\n")
const jugador = {
    nombre: "Gammastream",
    id:1213214,
    proteccion: true,
    vida: 100,
}

for (const atributo in jugador) {
    console.log(`${atributo}: ${jugador[atributo]}`)
}



//La otra variante del for son los forof que son bucles
//que permiten recorrer  y van directamente al contenido de un arreglo ocadena de texto


//Creacion de un arreglo de strings 

let lenguejes = ["Javascript","Java","Python","Html","Css"]

console.log("\n\nVamos a recorrer el contenido de una arreglo\n\n")
for (const lenguaje of lenguejes) {
    console.log(lenguaje) 
}


//Podriamos crear otro arreglo de numeros y ver como se comportan

console.log("\n\n--------Recorrido de un arreglo con for of--------------\n\n")
let numeros_nuevos = [12,54,76,89,12,34,46,89]

for (const numero of numeros_nuevos) {
    console.log(numero)
}
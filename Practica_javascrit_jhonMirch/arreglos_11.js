console.log("------Arreglos-------\n\n\n")


/**Vamos a crear arreglos en estasección  */

const a  = [];

console.log(a)

const b = [1, true , "Hola",["A","B","C"]]
console.log(b)

//Podemos saber el tamaño de los arreglos con los metodos de las fuciones

console.log(a.length)//Tamaño del arreglo es de 0
console.log(b.length)//Tamaño del arreglo es de 4


/**Podemos acceder a los elementos de cada unos de los arreglos con el subindice 
 * de cada uno 
 */
//Puntualmente podemos acceder a los elementos de cada uno por el subindice en b no en a
console.log("\n\n\n")
console.log(b[0])
console.log(b[1])
console.log(b[2])
console.log(b[3])//Aca se accede al cuarto elemento del arreglo b que a su ves es 
//un arreglo 

console.log(b[3][0]) //Aca estamos usando dos subindices para acceder a cada uno 
//al arreglo de la posicion 3 y estamos accediendo al elemento de la posicion
//cero



console.log(b[3][2])



//Y que pasaria si tuvieramos varios arreglos dentro de otros arreglos ?

console.log("\n\n\n")
c = [true, ["A","B","C"] , 12 , "Alexander" ,["a",1,5,["c","d","f"]],  23 ]

console.log(c.length)
console.log(c[1])
console.log(c[4])

console.log(c[4][3])

console.log(c[4][3][2])




/**Veremos otras manera de declarar los arreglso de javascript  */


const d = Array.of(1,2,3,4,5,7,"Hola");
console.log("\n\n\n")
console.log(d)




//Tambien podria necesitar un arreglo de 100 posiciones peor que cada una tenga un valor 
//definido por ejemplo false 

const e = Array(50).fill(false)
console.log(e)


//Formas antiguas de declarar arreglos en javascript



const f = new Array()

console.log(f)


const g = new Array(1,2,3,true ,false)
console.log(g)




//Vamos a ver los metodos de push and pop en los arreglos 

const colores = ["Rojo", "Verde","Azul"];


console.log(colores)
colores.push("Negro");
console.log(colores);

colores.pop();
colores.pop();

console.log(colores)

//Vamos a usar el metodo forEach para los arreglos 

const colores_2 = ["Rojo", "Verde","Azul"];
console.log("\n\n")
console.log(colores_2)


colores_2.forEach(function(el,index){
    console.log(`<li id="${index}">${el}<li>`)
})







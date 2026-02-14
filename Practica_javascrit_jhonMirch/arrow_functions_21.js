console.log("\n\n----------VEremos sobre las arrows functions-----------\n\n")


//Repasaremos sobre las funciones expresadas

let saludar = function(){
    console.log("Hola mundo");
}

//Veremos que las declaraciones se podran declarar unicamente despues de la declaracion de la funcion

saludar()


//Veremos sobre las funciones declaradas que podes definirlay declararlas incluso antes de 
//  la creacion de la misma veremos un ejemplo



saludar_2()
function saludar_2(){
    console.log("Saludando nuevamente desde cero\n\n")
}


saludar_2()



//Ahora veremos lo que hacen las arrows functions
//Esta arrow function es una funcion expresada 
//Esta declaracion  no va a funcionar porque estamos en presencia de una fucnion 
//EXPRESADA
//saludando()
const saludando = ()=>{
    console.log("\n\n------Estoy saludando desde una arrow function")
}

saludando()




//VEremos una arrow fucntion con una declaración de una sola linea
const saludando_3 = ()=> console.log("\n\n\n--------Saludando desde la arrow fucntion 3")


saludando_3()







//Ahora veremos sobre las arrow function pero en esta ocasion con parametros desde cero


const saludando_4 = (nombre)=>console.log(`\n\nBienvenido nuevo usuario ${nombre}`)

saludando_4("Alexander")



//En caso de que nuestra funcion no reciba parametros debemos dejarlo con parenteis 
//Obligatoriamente


//Podemos no usar parentesis si fuera el caso de que solo enviemos un parametro


const saludando_5 = usuario=>console.log(`\n\nBienvenido al campus ${usuario}\n\n`)

saludando_5("Fernandito")



//Veremos ahora un ejemplo con varios parametros para una funcion

console.log("\n\n----------Veremos el resultado de la suma de 2 numeros -----")
const sumar = function(a,b){
    return a+b
}


console.log(sumar(8,9))



//Ahora veremos la suma de valores con varios parametros pero de maneramucha mas simplificada
console.log("\n\n------Suma de 2 valores con una arrow fucntions mas expresada------")
const sumar_nuevamente = (a,b)=>a+b

console.log(sumar_nuevamente(10,21)) 



//Veremos sobre las arrow functions de varias lineas de codigo 



const saludnado_varias_veces = ()=>{
    console.log("Saludo 1")
    console.log("Dos")
    console.log("Tres")
    console.log("Cuatro")
}



console.log("\n\nVeremos varias lineas de codigo de una arrow fucntion--------\n\n")

saludnado_varias_veces()



//Ahora veremos las arrow fucntions sobre un vector de o arreglo de numeros de la 
//Siguiente manera veamos un ejemplo concreto 



const numeros = [12,34,65,43,56,8,12,0,67]


//Ahora veremos como imrpimir con el metodo foreach y la arrow fucntions

console.log("\n\n-----Veremos el resultado de no usar una arrow functions\n\n")



numeros.forEach(function(elemento_de_la_posicion,posicion){
    console.log(`Posicion ${posicion} : ${elemento_de_la_posicion}`)
})



const pedidos= [11,2,3,4,5,6,7,8,9,0,21]


//VEremos ahora el mismmo comportamiento pero ahora con una arrow functions de la
 //Siguiente manera

console.log("\n\n---------VEremos el mismo comportaminetos con una ARROW FUNCTIONS-------")
 pedidos.forEach((elemento_de_la_posicion,posicion)=>{
    console.log(`Posicion: ${posicion} : ${elemento_de_la_posicion}`)
 })




 //Podemos hacer un comentario solo de una sola linea de la siguiente manera

console.log("\n\n----Vamos a usar un for each pero en esta ocasion con una sola linea--------")
pedidos.forEach((el_pos,pos)=>console.log(`pos:${pos}: ${el_pos}`))



console.log("------Funciones------\n\n")
/**Vamos a tranajr sobre la funciones en javascript 
 * que tiene su propias funcionalidades 
 */

//Veremos sobre las funciones declaradas

function estoEsUnaFuncion(){

    console.log("Uno")
    console.log("Dos")
    console.log("Tres")

}


//Vamos a invocar a la funcion que acabamos de crear 
//estoEsUnaFuncion()


//Vamos a usar otra funcion muy especial pero que va a devolver algun valor particular

function unaFuncionQueDevuelveUnValor(){
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
    return "Se devolvieron los valores correspondientes"
}

//unaFuncionQueDevuelveUnValor()//Esto devuelve uno dos tres


console.log("\n\n")


let devolucion = unaFuncionQueDevuelveUnValor()

//console.log(devolucion)






/**Ahora vamos a ver sobre las funciones declardas pero con algunos parametros 
 * correspondientes
 */

function saludar (nombre,edad){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

saludar("Alexander",26)
saludar()//Esto devuelve undefine en ambos campos

//Para evitar este tipo de inconvenientes deberiamos usar lo siguiente

function saludar_nuevamente(nombre ="Desconocido",edad=0){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}


saludar_nuevamente("Pepito",24)//Se le esta asignando parametros a la funcion 

saludar_nuevamente()//No se le esta asignando parametros pero ya estan por defecto






//Ahora vamos a estudiar sobre las funciones declaradas vs las fuciones expresadas

//Funciones declaradas 


estoEsUnaFuncionDeclarada()

function estoEsUnaFuncionDeclarada(){

    console.log("La funciones declaradas pueden invocarse antes de la creacion del mismo")

}

estoEsUnaFuncionDeclarada()









//Ahora vamos a usar sobre las funciones expresadas
//Pero tambien veremos el uso de la funciones anonimas 
//Cuando se usa las funciones expresadas en javascript por lo general se 
//usa los const para declarar variables y asignarle una funcion anonima 





const funcionExpresada = function(){
    console.log("Estamos viendo el resultado de las funciones expresadas")
}


console.log(funcionExpresada)


//Otra manera de hacerlo es aplicando el concepto de funciones flechas 

const funcionExpresada_2 = ()=>{
    console.log("Estamos viendo el cuerpo de la funcion expresada nuemro 2 ")
}

console.log(funcionExpresada_2)




//Algo importante a tener en cuenta es que podemos llamar a las funciones expresadas 
//con simples parentesis 


funcionExpresada()//Veremos todo lo que estra dentro de la funcion expresada 

funcionExpresada_2()//Veremos el resultado de todo lo que esta dentro de las 
//Funciones expresada numero 2 


/**Algo importante a tener en cuenta es que no podemos 
 * llamar a las funciones antes de su declaracion dado que nos darian 
 * problemas al momento de llamarlas hacer un ejemplo
 */



//Las funciones expresada son buenas practicas de programacion

//Fin se vio aspectos importantes sobre 
//Las funciones declaradas y las funciones expresadas
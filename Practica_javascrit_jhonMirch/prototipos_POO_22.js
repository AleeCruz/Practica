console.log("\n\n-------Veremos sobre los prototipos en javascript desde cero-----\n")

/**AHora hablaremos sobre el lenguaje javascript podemos deceir que es un lenguaje multiparadigma
 * 
 * 
 * Vamos a ver el concepto de la POO que tiene pilares fundamentales como:
 * 
 * Clases->Modelos a seguir 
 * Objetos->Es una instancia de una clase 
 *  ->Atributos->Son caracteristicas o propiedades de un objeto (En resumen son la variables a usar)
 *  ->Metodos->Son las acciones que pueden realizar los objetos, por lo general terminan sinedo
 * verbos o pueden terminar en un verbo (En resumen no son mas que funciones dentro del objeto)
 */



//Veamos un ejemplo concreto sobre el objeto literal


const animal_1 = {
    nombre: "Snoppy",
    sonar(){
        console.log("Guauu!!! Guauu!!! Guauu!!!")
    }
}


const animal_2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Hola Hola Hola")
    }
}



//Vamos a declarar el objeto literal en la consola del navegador


console.log(animal_1)
console.log(animal_2)




//Vamos a reaizar una funcion constructora para la creacion de dos instancias de animal

//Funcion constructora Animal Podriamos verlo como si fuera una clase del objeto


function Animal(nombre,genero){
    //Atribustos
    this.nombre = nombre,
    this.genero = genero,

    //Metodos 
    this.sonar = function(){
        console.log("Hago sonidos porque estoy vivo");
    }
}

//Ahora podemos instanciar nuevos objetos  a partir de la clase constructora




const snoopy = new Animal("Snoopy","Macho");
const lolaBunny = new Animal("Lola Bunny","Hembra");


console.log("\n\n-----------Vamos a crear 2 instancia de objeto de la clase Animal---------\n\n")
console.log(snoopy)
console.log(lolaBunny)






/**Ahora vamos a crear una version 2 de la funcion constructora de la siguiente manera 
 * primero deemos crear una funcion constructora que solo tenga presente los atributos de 
 * una clase
 */

function SerVivo(nombre,genero){
    //Atributos
    this.name = nombre,
    this.genero = genero

}



const bugBunny = new SerVivo("Bugs","Macho")
const mickey = new  SerVivo("Mickey","Macho")


//Podemos mostrar por consola a los objetos pero solo tendran 2 atributos cada uno
console.log("\n\n-------Vamos a crear 2 instancias nuevas de objetos a parti de un constructor.....\n\n")
console.log(bugBunny)
console.log(mickey)



//Ahora vamos a darle nuevas acciones a cada uno con el metodo prototype

//Se esta agregando acciones a las clase del tipo SerVivo 
//Pero este tiene un mejor rendimiento que lo demas 

SerVivo.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo ")
}

SerVivo.prototype.saludar=function(){
    console.log("Hola Hola Hola Hola Amigos")
}


console.log("\n\n------Vamos a ver las nuevas instancias con metodos agregados ------------")

console.log(bugBunny)
console.log(mickey)


console.log("\n\n-------VAmoa a ver sobre los conceptos de la herencia prototipica en javascript------\n\n")


//Primero vamos a crear una funcion construtora animal 

function Animal(nombre,genero){

    this.nombre = nombre;
    this.genero=genero;
}

//Podemos crear nuevos metodos para la clse Animal

Animal.prototype.sonar = function(){
    console.log("Hola soy un ser vivo y hago sonidos por estar vivo")
}

Animal.prototype.saludar =function (){
    console.log("Hola Hola como estas este es un saludo especial del prototipo Animal")
}



//Herencia Prototipica 

function Perro(nombre, genero,tamanio){
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
}



//Vamos a asignar a la instancia de perro  que sea una instancia de animal
//Esta simple linea esta teniendo una instancia de perro que esta HEREDANDO DE ANIMAL
Perro.prototype = new Animal

Perro.prototype.constructor = Perro


//Podemos realizar sobreescritura de metodos del prototipo padre en el hijo 
//Realizaremos una sobreescritura de metodos del prototipo del padre en el hijo 
Perro.prototype.sonar = function (){
    console.log("SOy un perro y mis sonido es un ladrido")
}



Perro.prototype.ladrar = function(){
    console.log("GUAU GUAU GUAU")
}



//Vamos a crear instancias de los prototipos perros de la siguiente manera

const snoopy = new Perro("Snoopy","Macho","Mediano")
const lolaBunny = new Animal("Lola Bunny","Hembra");



console.log(snoopy)
console.log(lolaBunny)


console.log("\n\nMetodos de snoppy\n\n")

snoopy.sonar();
snoopy.saludar();

console.log("\n\nMEtodos de lolaBunny\n\n")
lolaBunny.sonar();
lolaBunny.saludar()
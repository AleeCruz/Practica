console.log("\n\n----------Vamos a hablar sobre los metodos  estaticos, los getters and setter en javascript -----------\n\n")

//Veamos como podemos ver y usar  los metodos estaticos en javascript desde cero


//Primero vamos a crear una clase de tipo Animal y despues una clase que herede de la clase animal


class Animal {
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar(){
        console.log("Hola soy un ser vivo y hago sonidos")
    }

    saludar(){
        console.log(`Hola que tal soy ${this.nombre} y mi genero es ${this.genero}`)
    }
}




//Podemos hacer la herencia a partir de la clase Animal de la siguiente manera



class Perro extends Animal{

    constructor(nombre,genero,tamanio){
        super(nombre,genero);
        this.tamanio = tamanio;
        this.raza = null
    }

    ladrar(){
        console.log("Guauuuu!!!  Guauuuu!!!   Guauuuu!!!")
    }

    sonar(){
        console.log("Nosotros los perros hacemos sonidos de ladridos")
    }



    //Vamos a ejecutar un metodo estatico sin necesidad de instanciar un perro de la siguiente forma

    static queEres(){
        console.log("Los perros somos animales mamiferos que pertenecesmoa a la familia de los caninos. Somos considerados los mejores amigos del hombre")
    }

    //AHora veremos sobre los metodos getter and setter en javascript 

    get getRaza(){
        return this.raza
    }

    set setRaza(raza){
        this.raza=raza;
    }


}

//Vamos a ver un metodo estaico sin necesidad de instanciar un perro 

Perro.queEres()


const snoopy = new Perro("Snoopy","Macho","Mediano");
const lolaBunny = new Animal("Lola Bunny","Hembra");




snoopy.saludar();
snoopy.sonar();
snoopy.ladrar()

console.log("\n")

lolaBunny.saludar()
lolaBunny.sonar()


//Importante nosotros vamos a usar esos metodos como si fueran propiedades de la clase 

//No es como en otro lenguajes de programacion asi que mucho cuidado
console.log(snoopy.getRaza)

//Y ahora para darle un valor de seteo lo que debemos de realizar es los siguiente 
//pensarlo como si fuera una vaiable per en realidad es una propiedad 


snoopy.setRaza = "No indentificado"

console.log(snoopy.getRaza)
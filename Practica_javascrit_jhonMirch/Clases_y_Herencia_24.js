console.log("\n\n---Vamos a ver sobre las clases y la Herencia en Javascript -------\n\n")



class Animal{
    //Vamos a crear nuestro constructor 

    constructor(nombre,genero){
        this.nombre =nombre;
        this.genero = genero;
    }

    //Vamos a crear un par de metodos para la clase

    sonar(){
        console.log("Hago sonidos porque estoy vivo ")
    }


    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
}




class Perro extends Animal{

    constructor(nombre,genero,tamanio){
        super(nombre,genero);
        this.tamanio =tamanio;
    }

    sonar(){
        console.log("SOy un perro y mi sonido es un ladrido ");
    }

    ladrar(){
        console.log("Guauuuuu Guauuuu Guauuuu");
    }


}

 

const mimi = new Animal("Mimi","Hembra");
const scooby = new Perro("Scooby","Macho","Gigante");


console.log("\n\n--------Vamos a ver los nuevos objetos que son instancias de las clases-----------\n\n")

console.log(mimi)
mimi.sonar();
mimi.saludar();

console.log(scooby)
scooby.sonar()
scooby.saludar()
scooby.ladrar()


//Surge la pregunta de que sucede ahora ? Como puedo hacer la Herencia ahora con las clases ??
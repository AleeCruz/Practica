console.log("\n\n---------------Veremos sobre los conceptos de objetos literales ------------\n\n")



//Vamos a ver sobre los conceptos literales
//Primero vamos a crear un par de variables para el uso de los objetos literales


let nomnbre = "Kuko",edad = 12

const perro ={
    nombre: nomnbre,
    edad:edad,
    ladrar:function(){
        console.log("Guauu!!  Guauu!!")
    }
}

//Ahora vamos a usar lo que corresponda  
//Veamos las acciones que deba de realizar nuestro objeto perro

//Nuestro objeto perro va a realizar ciertas acciones



perro.ladrar()

//La ventaja de que este nuevo objeto va a usar los mismos valores que el objeto anterio 
//Por lo tanto podremos asignarle el valor de esas mismas variables pero ademas 
//Podremos agregar alguno nuevos atributos y de paso podremos agregar alguna funcionalidad
//O acciones

const dog = {
    nombre,
    edad,
    raza:"Callejero",
    ladra(){
        console.log("Guauu!! Guauu!! Guauu!!")
    }
}


//Vamos a hacer que nuestro objeto realice las acciones correspondientes 


dog.ladra()
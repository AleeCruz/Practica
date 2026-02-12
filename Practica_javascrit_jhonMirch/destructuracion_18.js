console.log("\n\n----------__Vamos a ver sobre los elementos fundamentales de destructuracion")


//Vamos a ver un ejemplo simple del uso de arreglos pero sin destructuracion veamos



let numeros =[1,2,3]

let uno =numeros[0],dos = numeros[1], tres = numeros[2]

console.log(uno,dos,tres)



//Ahora veamos la destructuracion en su maxima expresion



const [one,two,three] = numeros; 
console.log(one,two,three)


//Vamos a ver sobre las destructuraciones en lacreacion de algun objeto :V


const persona ={
    nombre: "ALecander",
    apellido: "Cruz Apaza",
    edad: 23,
    
}

//Ahora vamos a usar la destructuracion  veamos como se comporta 
let {nombre,apellido,edad} = persona

console.log(nombre, apellido,edad)


//Importante para que la destructuracion funcione correctamente con los objetos debemos 
/**Debemos de asignar el mismo nombre que el de la variables */
//Importa el orden de las variables?? LO cierto es que no es importante podes 
//usar el orden que vos prefieras es indistinto


//Veamos un ejemplo sencillo

console.log("\n\n------------Destructuracion con el objeto jugador_1----------\n\n")

const jugador ={
    name_j:"Jorge",
    surname: "Gomez",
    daño: 12
}

//Ahora vamos a ver la destructuracion

//Aca claramente podemos ver que el ordens de la destructuracion no es importante 

let {surname,daño,name_j} = jugador

console.log(name_j,surname,daño)
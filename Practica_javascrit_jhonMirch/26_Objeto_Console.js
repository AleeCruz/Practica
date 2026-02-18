console.log("\n\n\n-------Vamos a ver sobre el objeto console------------\n\n")

console.log(console)
console.error("Esto es un error provocado intencionalmente")
console.warn("Esto es un aviso o un warning")

//veremos otros tipos de metodos de la consola por ejemplo el metodo info

console.info("Esto es un texto informativo")


console.log("Esto es un mensaje informativo de lo que ah pasado en nuestra aplicacion")

let nombre = "Felipe", apellido = "Gerardo", edad = 25;



console.log(nombre)
console.log(apellido)
console.log(edad)

console.log(nombre, apellido,edad)

//Podemos hacerlo de otra formas con las soguientes caracterisiticas 

console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)


//Otra manera de realizar esto es con las mascaras similares a pho o c++

console.log("Hola mi nombre es %s %s y tengo %d años",nombre, apellido,edad)


//Podemos ver otro metodo de console que es le metodo clear que nos permite limpiar la consola


console.clear()



//Vamos a ver otros metodos de el objeto console como lo son 


console.log(window)
console.log(document)

//Y que pasa si utilizamos dir ???

console.dir (window)
console.dir(document)
//Podemos usar el meotodo de group de javascript como? de la siguiente forma 


console.group("Los Curso de Gamma stream son: ")
console.log("Matematica 51 ")
console.log("Fisica 03")
console.log("Estadistica Descriptiva")
console.log("Analisis Matematico II")
console.groupEnd()




console.groupCollapsed("Los Curso de Gamma stream son: ")
console.log("Matematica 51 ")
console.log("Fisica 03")
console.log("Estadistica Descriptiva")
console.log("Analisis Matematico II")
console.groupEnd()




console.clear()


//vamos a usar el metodo table

console.log(console)
console.table(Object.entries(console).sort())



//Surge la pregunta que pasa si quiero representar a mis arreglos como si fueran tablas ?


let numeros = [1,2,3,4,5]
let vocales = ["a","b","c","d","e"]


//Podemos usar el metodo table de console

console.table(numeros)
console.table(vocales)



//Podemos ver a los objetos de la misma manera con sus respectivos atributos y valores 



const perro={
    nombre: "Goofy",
    apeelido: "unidefine",
    edad:"Desconocido",

    ladrar(){
        console.log("Gua GUa GUa")
    }
}

console.table(perro)





//Vamos a ver cuanto tiempo suele tardar nuestro codigo de javascript con algun metodo de console

console.clear()


console.time("Cuanto tiempo tarda mi codigo")
const arreglo = Array(1000000)//Se creo un arreglo de 1000000 posiciones 

for (let i=0;i<arreglo.length;i++){
    arreglo[i]=i
}
console.timeEnd("Cuanto tiempo tarda mi codigo")

//Podemos vizualizar esa cantidad de valores 

//console.log(arreglo)


//Podemos ver tambien otra manera de ver los contadores con un ciclo for o parecido 



for (let i=0;i<100;i++){
    console.count("Ciclo for")
    console.log(i);
}


//HAsta aca hemos visto sobre los distintos tipos de metodos que tiene el objeto console
//Cabe resaltar que no son los unicos sino que hay varias otras formas de realizar conteos

console.clear()


//veamos una breve introduccion para hacer o realizar pruebas unitarias 
// metodo assert permite realizar dichas pruebas 



//Veremos una mini prueba de como hacer pruebas unitarias 


let x=30, y=2,pruebasXY ="Se espera que x sea menor que y"

console.assert(x<y,{x,y,pruebasXY})
















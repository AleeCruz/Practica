console.log("\n\n\n--------Veremos sobre le parametro rest and operador spret-----------")

//Veamos un ejemplo calro del uso del parametro rest 



//Vamos a crea runa funcion de suma de la siguiente manera

function sumar (a,b,...c){
    let resultado = a+b;


    c.forEach(function(parametro){
        resultado += parametro
    });

    return resultado;
}


//AHora probemos la funcion con varios valores de entrada para ver como es el comportamiento 


console.log(sumar(1,2))

console.log(sumar(1,2,3))
console.log(sumar(1,2,3,4))
console.log(sumar(1,2,3,4,5))
console.log(sumar(1,2,3,4,5,6))

//Ahora vamos a ver sobre el spred operator que es algo importante para que 




//Primero vamos a crear dos arreflos de 5 posiciones

let arre_1 =[1,2,3,4,5],arre_2=[6,7,8,9,0]

console.log(arre_1,arre_2)


//Primero vamos a justarlo de manera intuitiva nuestro objetivo es encontrar el arreglo 1,2,3,4,5,6----etc

let arre_3 = [arre_1,arre_2];

console.log(arre_3)//Aca nos damos cuenta que no esta funcionando como quisieramos que hacer ??


//En este tipo de cuestiones usamos el operador spread


console.log("\n\nVeremos el uso del operador spread\n\n")

arre_3 = [...arre_1,...arre_2];

console.log(arre_3)






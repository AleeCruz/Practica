/**Vamos a ver la primera estructura de control en programacion de javascript */

/**Veremos la estructura de control if-else */


//Vamos a ver un ejemplo sencillo de control de mayoria de edad


let edad = 17

if (edad>18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}

//Podriamos aplicar la logica con los operadores de mayor igual 

if(edad>=18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}


//Podemos aplicarlo como mejor nos parezca inclusive podemos aplicar sentencias de control
//If-Else anidados

//Realizaremos un ejercicio de rango de horas con else-if anidados
let hora =22 
if (hora >=0 && hora <=5){
    console.log("Dejame dormir")
}else if (hora >= 6 && hora <= 11){
    console.log("Buenos dias")
}else if (hora >= 12 && hora <=18){
    console.log("Buenas Tardes")
}else if (hora >= 19 && hora<=23){
    console.log("Buenas Noches")
}



//Podemos simplificar esto con un operador muy epsecial denominado operador ternario

console.log("Operadores Ternarios ")
let edadIndividuo = 12
let eresMayor = (edadIndividuo>=18) ?"Eres mayor de edad":"Eres menor de edad";
console.log(eresMayor)



//Ahora vamos a ver un caso muy especial denominado switch-case 

console.log("Casos del switch case para los dias de la semana ")

let dia = 2;

switch (dia) {
    case 0:
        console.log("Hoy es el dia domingo");
        break;
    case 1:
        console.log("Hoy es el dia lunes");
        break;
    case 2:
        console.log("Hoy es el dia martes");
        break;
    case 3:
        console.log("Hoy es el dia miercoles");
        break;
    case 4:
        console.log("Hoy es el dia jueves");
        break;
    case 5:
        console.log("Hoy es el dia sabado");
        break;
    case 6:
        console.log("Hoy es el dia domingo");
        break;

    default:
        console.log("Valor ingresado incorrecto intente nuevamente")
        break;
}
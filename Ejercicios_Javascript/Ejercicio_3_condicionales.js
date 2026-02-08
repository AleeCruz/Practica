/**1. El Validador de Estaciones (Básico: if / else if)
Crea una variable llamada mes (con un número del 1 al 12).

Si el mes es 12, 1 o 2, imprime "Es Invierno".

Si el mes es 3, 4 o 5, imprime "Es Primavera".

Si el mes es 6, 7 o 8, imprime "Es Verano".

Si el mes es 9, 10 o 11, imprime "Es Otoño".

Si el número no está entre 1 y 12, imprime "Mes no válido". */


let mes = 4

if (mes ===1 || mes ===2 || mes===12 ){
    console.log("Es invierno!!!!")
}else if (mes >= 3 && mes<= 5){
    console.log("Es Primavera")
}else if (mes>=6 && mes <=8){
    console.log("Es verano")
}else if (mes >= 9 && mes<=11){
    console.log("Es Otoño")
}else{
    console.log("El mes ingresado es no valido")
}












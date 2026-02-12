console.log("\n\n----------Vamos a ver el amnejo de errores con la sentenicias try-catch----------\n\n")



/*
try {
    console.log("Aca va a ir el codigo a evaluar dentro del bloque try se ejecura")
    console.log("\n\nSoy el segundo mensaje del trycatch")
    console.log("\n\n")

    //Vamos a ejecutar un error de manera voluntaria 
    //veremos como sera el comprtamiento del try-catch
   // Errorquenoesixte;


    console.log("Soy el ultimo mensaje del bloque try")
} catch (error) {

    //Esta seccion se ejecutara si se encuantra algun errro en el bloque try
    console.log("\n\n")
    console.log("Esta seccion de codigo se va a ejecutar si ocurrio algun error")

    console.log("EL tipo de error es: \n")
    console.log(error)


    console.log("\n\n")

}finally{
    console.log("\n\nEl bloque finally siempre se ejecutara al final de un bloque try-catch")
}

*/



//Vamos a analizar otro bllque del tipor try-catch


try {

    let numero = "ale";

    if (isNaN(numero)){
        throw new Error("El valor ingresado no es un numero")
    }

    console.log("Esta linea de codigo se ejecutar porque es un numero: "+numero*numero)
    
} catch (error) {
    console.log("Se produjo la siguiente excepcion: "+error)   
}




//Logramos analizar el manejo de excepsiones en javascript ahora podremos mandar mensajes
//De error perzonalizados 
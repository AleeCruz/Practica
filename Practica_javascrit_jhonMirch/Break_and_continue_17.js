console.log("\n\n----------------Palabras reservdas Break and Continue---------\n\n ")


//Creamos un arreglo de numeros que van desde el 1 al 0







//Veamos otro ejemplo de break and continue del tipo
//Vamos a crear un arreglo de numeros y despues vamosa recorrerla 



let valores= [12,32,345,6,87,90,1,45,67,98]

for (let j=0;j<valores.length;j++){
    if (j===5){
        break
    }
    console.log(`Valor de ${j}: ${valores[j]}`)
}


console.log("\n\n\nVamos a realizar el salto de linea corespondiente \n\n")

//Ahora vamos a ver el comportamiento de 

for(let k=0;k<valores.length;k++){
    if (k===5){
        continue
    }
    console.log(`Valores[${k}]: ${valores[k]}`)
}



/**La gran diferencia contra break and continue es que break termina la ejecucion de cierta estructura
 * de control en esta caso un for junto con if 
 * 
 * 
 * En cambio la sentecia continue lo que hace es realizar una omision para despues seguir
 * con la ejecucion correspondiente 
 */





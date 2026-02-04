console.log("\n\n-----------Objetos en javascript----------\n\n")

/**Vamos a ver distintas maneras de declara objetos puntualmente 2 se 
 * se recomienda que los objetos esten creados con la alabra reservada const para
 * que ningun objeto pise o autoreferencie a otro, 
 */

//Acabamos de crear un objeto vacio 
const a = {

}
console.log(a)
//Otra manera de crear un objeto es la siguiente 

const b = new Object();

console.log(b)


/**Ahora vamos a crear un objeto con calves-valores asignados
*/

/**Los objetos tiene lo que se conocen como metodos o funciones
 * que son importantes para los mimsos, podria decirse que 
 * es importante tener diferenciar a cada uno
 * 
 * Atributos 
 *  color
 *  tamanio
 * etc
 * 
 * 
 * 
 * Metodos
 * 
 * saludar()
 * correr()
 * etc()
 * 
 * 
 */
const jon = {
    nombre: "Alexander",
    apellido: "Cruz Apaza",
    edad: 26,
    soltero: true,
    pasatiempos: ["Dar clases","Jugar","Correr"],
    contacto: {
        email: "gamma0024@gmail.com",
        instagram: "GammaStream",
        telefono: 1122430662,
    },
    

    saludar: function(){
        console.log("Hola :D")
    },


    SaludoCompleto: function(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad}`)
    },



    contactamePor:function(){
        console.log(`Puedes contactarme a traves de ${this.contacto.email}`)
    }
}

//Ahora vamos a ver distintas maneras de usar los atributos de un objetos


console.log(jon)

console.log(jon["nombre"])
console.log(jon["apellido"])

//Se recomienda el uso del punto para que funcione correctamente 

console.log(jon.nombre)
console.log(jon.apellido)
console.log(jon.edad)
console.log(jon.soltero)
console.log(jon.pasatiempos)



//En caso de que se quiera acceder a solo uno de esos parametros del arreglo


console.log(jon.pasatiempos[0])
console.log(jon.pasatiempos[1])
console.log(jon.pasatiempos[2])

//En caso de que se quiera acceder a un  elementos de un objeto dentro de otro objeto 
//Accedemos mediante la notacion del punto doble


console.log("\n\n-----Datos de contacto------\n\n")
console.log(jon.contacto.email)
console.log(jon.contacto.instagram)
console.log(jon.contacto.telefono)



/**Ahora vamos a usar el metodo o procedimientos de un objeto de la siguiente manera */


jon.saludar();


//Vamos a usar otro metodo de la clase objeto pero junto on la palabra reservad this 


jon.SaludoCompleto();


//Podriamos incluso usar alguna de los parametros de otro objeto que tiene valores 


jon.contactamePor();


/**Ahora vamos a ver varios metodos importantes que se usan en aplicaciones 
 * por ejemplo el metodo key
 */


console.log(Object.keys(jon))

/**Otro metodo importante es el value que devuelve el valor en si de los atributos/metodos de
 * un objeto
*/

console.log(Object.values(jon))


/**Otro metodo que nos ayuda a revisar si existen o no ciertos atributos o propiedades es:  
 * hasOwnProperty
*/

console.log(jon.hasOwnProperty("nombre"))
console.log(jon.hasOwnProperty("nacimiento"))

console.log(jon.hasOwnProperty("saludar"))






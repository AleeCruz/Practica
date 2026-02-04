/**Reto 2: El Objeto "Gamer"
En el video 12 y 13 se ven Objetos y Arreglos.

Consigna: Crea un objeto llamado pcMasterRace.

Propiedades: Debe tener procesador (string), ram (número), ssd (booleano) 
y juegos (un arreglo con 3 nombres de juegos).

Tarea: Imprime en consola un mensaje que diga: "Mi PC tiene un [procesador] y
 el segundo juego de mi lista es [juego2]". */

const pcMasterRace ={
    procesador: "Intel 8086",
    ram: 4,
    ssd: true,
    juegos: ["God of War","Crash Twinsanity","AGE"]
}

console.log(`Mi pc tiene un procesador ${pcMasterRace.procesador}\n y el segundo juego de mi lista es ${pcMasterRace.juegos[1]}`)
console.log("\n\n------Vamos a ver sobre los elementos del Documento-------\n\n")

console.log(window.document)
//Puedo acceder de una manera ams sencilla
console.log(document)
console.log(document.head)

console.log(document.body)
console.log(document.documentElement)//Esto permite obtener el elemento html
console.log(document.doctype) //Permite obtener el eleemnto Doctype
console.log(document.characterSet) //Permite ver el UTF-8

console.log(document.title)

console.log(document.links)//Permite ver todos los links que estan presentes en el documento html

console.log(document.images)//Permite ver todas las imagenes que estan en el documento

console.log(document.forms)//Me permite ver todos los formularios que estan presentes
console.log(document.styleSheets)//Me permite ver todos los estilos del documento
console.log(document.scripts)//Me permite ver todos los cript que estan dentro del documento

setTimeout(()=>{
    //Permite seleccionar una seccion de la pagina web y la muestra por la consola
    console.log(document.getSelection().toString())
},3000)



//Tambien podriamos injectar codigo html en el navegador

document.writeln("<h1>Hola mundo desde el DOM</h1>")
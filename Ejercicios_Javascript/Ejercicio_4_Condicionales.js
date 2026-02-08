/**. ¿Puedo entrar al club? (Avanzado: Ternario y Anidación)
Imagina que para entrar a un club necesitas ser mayor de 18 años Y traer tu identificación.

Crea dos variables: edad (número) y tieneID (booleano).

Usa un operador ternario para guardar en una variable llamada mensaje el texto 
"¡Bienvenido!" si ambas condiciones se cumplen, o "Acceso denegado" si alguna falla.

Reto Pro: Intenta hacerlo primero con un if anidado y luego refactorízalo (pásalo)
 a una sola línea usando el operador ternario. */


 let edad = 18
 let tieneID =true

 let mensaje = (edad>=18 && tieneID===true)?"Bienvenido":"Acesso Denegado"

 console.log(mensaje)
 
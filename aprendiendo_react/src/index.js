import React from 'react';
import ReactDOM from 'react-dom/client'; // Importas desde /client


//Para trabajar con JSX debes de colocar todo dentro de una etiqueta el JSX cambia 

//Veremos un par de cosas de codigo jsx
const nombre = "Alexander"
const JSX = (
  //Podriamos poner clases a ciertas etiquetas
    <>
      <h1 className=''>Hola Mundo te saluda {nombre}</h1>
      <p>Esto es un parrafo para el uso de react</p>
    </>
    /**Esto es totalmente funcional
    <div>
      <h1>Hola Mundo te saluda {nombre}</h1>
      <p>Esto es un parrafo para el uso de react</p>
    </div>
     */
);

// 1. Creas la raíz apuntando al elemento 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Renderizas el JSX usando el método render de esa raíz
root.render(JSX);
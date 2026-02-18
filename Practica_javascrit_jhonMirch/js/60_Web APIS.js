let texto = "Esto es un texto  de pruebas que vamos a usar ";

// 1. Definimos la función
const hablar = (mensaje) => {
    const elMensaje = new SpeechSynthesisUtterance(mensaje);
    // Opcional: Puedes cambiar el tono o la velocidad
    elMensaje.rate = 1; 
    speechSynthesis.speak(elMensaje);
};

// 2. Creamos un disparador (Botón) para cumplir con la política de los navegadores
document.addEventListener("click", () => {
    console.log("Reproduciendo voz...");
    hablar(texto);
}, { once: true }); // 'once: true' hace que solo se dispare el primer clic
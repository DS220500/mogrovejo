const textArray = ["Bienvenido al centro médico especializado Santo Toribio de  Mogrovejo.", "Cuidamos de tu salud.", "Tu bienestar es nuestra prioridad.","Calidad en cada atención médica."];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (textIndex === textArray.length) {
        textIndex = 0; // Reinicia el índice de texto
    }

    currentText = textArray[textIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    document.getElementById("typing-text").textContent = currentText.substring(0, charIndex);

    // Cambia de dirección cuando se llega al final o se borra
    if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1500); // Pausa antes de empezar a borrar
    } else if (charIndex === 0) {
        isDeleting = false;
        textIndex++;
        setTimeout(type, 500); // Pausa antes de empezar a escribir el siguiente texto
    } else {
        setTimeout(type, isDeleting ? 100 : 150); // Velocidad de escritura
    }
}

// Inicia el efecto al cargar la página
type();
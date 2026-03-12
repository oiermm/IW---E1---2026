// Seleccionamos el formulario del footer
const formularioFooter = document.querySelector(".formulario-recomendaciones");

// Función que se ejecuta al enviar el formulario
function manejarEnvioFormulario(event) {
    event.preventDefault(); 

    const nombre = document.querySelector(".campo-nombre").value;
    const comentario = document.querySelector(".campo-texto").value;

    if (comentario.length < 10) {
        alert("El comentario es demasiado corto. Añade un poco más de detalle.");
        return;
    }

    alert("Gracias por tu recomendación, " + nombre + ".");

    event.target.submit();
}

formularioFooter.addEventListener("submit", manejarEnvioFormulario);

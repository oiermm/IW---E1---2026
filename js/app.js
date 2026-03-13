/* VALIDACION DE FOOTER */
const formularioFooter = document.querySelector(".formulario-recomendaciones");

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

if (formularioFooter) {
    formularioFooter.addEventListener("submit", manejarEnvioFormulario);
}


/* VALIDACION DE REGISTRO */
const formularioRegistro = document.querySelector(".formulario-registro");

function manejarRegistro(event) {
    event.preventDefault();

    const nombre = document.querySelector(".formulario-registro input[type='text']").value;
    const email = document.querySelector(".formulario-registro input[type='email']").value;
    const departamento = document.querySelector(".formulario-registro select").value;
    const fecha = document.querySelector(".formulario-registro input[type='date']").value;
    const descripcion = document.querySelector(".formulario-registro textarea").value;

    if (!nombre || !email || !departamento || !fecha || !descripcion) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (descripcion.length < 15) {
        alert("La descripción es demasiado corta. Explica un poco más la incidencia.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Introduce un email válido.");
        return;
    }

    alert("Incidencia registrada correctamente. Gracias, " + nombre + ".");
    event.target.submit();
}

if (formularioRegistro) {
    formularioRegistro.addEventListener("submit", manejarRegistro);
}

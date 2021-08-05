// Función para convertir el texto ingresado 
// Objetivo: Pasar la primera letra del texto al final y agregar "ay"
function convertirTexto(texto) {
    let nuevoTexto = ""
    if (texto !== null) {
        let primera = texto.slice(0, 1)
        nuevoTexto = texto.slice(1, texto.lenght) + primera + "ay"
    }
    return nuevoTexto
}

// función para manejar el evento click del botón
function transformarTexto() {
    // recupero texto del DOM
    const palabra = document.getElementById("palabra")
    // transformo el texto y lo muestro solo si no se dejó nulo
    if (palabra.value) {
        let resultado = convertirTexto(palabra.value)
        alert("El texto transformado es: " + resultado)
    }
    else {
        alert("Debe ingresar un texto")
    }
}

// Función para convertir el texto ingresado 
// Objetivo: Pasar la primera letra del texto al final y agregar "ay"
function convertirTexto(texto) {
    let nuevoTexto = ""
    
    if (texto !== null)  {
        // elimino caracteres en blanco al inicio y al final 
        texto = texto.trim()
        // lo convierto en array de palabras usando " " como separador
        let listaPalabras = texto.split(" ")
        // recorro el arreglo y transaformo cada palabra
        for (let i=0; i<listaPalabras.length; i++){
            let primera = listaPalabras[i].slice(0, 1)
            let medio= listaPalabras[i].slice(1, listaPalabras[i].lenght) 
            nuevoTexto = nuevoTexto + medio + primera + "ay " 
        } 
        
    }
    console.log("nuevo ", nuevoTexto)
    return nuevoTexto
}

// función para manejar el evento click del botón
function transformarTexto() {
    // recupero texto del DOM
    const texto = document.getElementById("texto")
    // transformo el texto y lo muestro solo si no se dejó nulo
    if (texto.value) {
        let resultado = convertirTexto(texto.value)
        alert("El texto transformado es: " + resultado)
    }
    else {
        alert("Debe ingresar un texto")
    }
}

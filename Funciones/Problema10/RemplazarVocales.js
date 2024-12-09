




let cadena = prompt("Ingresa una cadena:");
let resultado = quitarVocales(cadena);
console.log(`La cadena sin vocales es: ${resultado}`);


function quitarVocales(cadena) {
    return cadena.replace(/[aeiouAEIOU]/g, '');
}
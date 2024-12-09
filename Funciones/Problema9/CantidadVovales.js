/**
 * 
 * 
 */



let cadena = prompt("Ingresa una cadena:");
let cantidad = contarVocales(cadena);
console.log(`La cantidad de vocales en la cadena es: ${cantidad}`);


function contarVocales(cadena) {
    let cantidadVocales = 0;
    const vocales = 'aeiouAEIOU';

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            cantidadVocales++;
        }
    }

    return cantidadVocales;
}
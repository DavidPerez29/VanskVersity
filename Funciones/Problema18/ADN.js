

function contarBasesADN(cadenaADN) {
    let cantidadA = 0;
    let cantidadC = 0;
    let cantidadG = 0;
    let cantidadT = 0;

    for (let i = 0; i < cadenaADN.length; i++) {
        let base = cadenaADN[i].toUpperCase(); 
        if (base === 'A') {
            cantidadA++;
        } else if (base === 'C') {
            cantidadC++;
        } else if (base === 'G') {
            cantidadG++;
        } else if (base === 'T') {
            cantidadT++;
        }
    }

   
    return `Cantidad de A: ${cantidadA}, Cantidad de C: ${cantidadC}, Cantidad de G: ${cantidadG}, Cantidad de T: ${cantidadT}`;
}

let cadena = prompt("Ingresa una cadena de ADN:");
let resultado = contarBasesADN(cadena);
console.log(resultado);

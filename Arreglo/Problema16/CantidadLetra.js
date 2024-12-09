/**Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán
formadas por las letras A o C o T o G referirse a taller de ADN pasado) y muestre la
cadena de ADN con mayor número de Timina (T). */

function cadenaConMasTimina(arreglo) {
    let maxTimina = 0;
    let cadenaConMaxTimina = '';

    for (let i = 0; i < arreglo.length; i++) {
        let cadena = arreglo[i];
        let cantidadTimina = 0;

        for (let j = 0; j < cadena.length; j++) {
            if (cadena[j] === 'T') {
                cantidadTimina++;
            }
        }

        if (cantidadTimina > maxTimina) {
            maxTimina = cantidadTimina;
            cadenaConMaxTimina = cadena;
        }
    }

    console.log('Cadena con mayor número de Timina (T):', cadenaConMaxTimina);
}

let cadenasADN = ['ACTG', 'ATCG', 'CGTTAG', 'TGTTC', 'ATGCTT'];
cadenaConMasTimina(cadenasADN);
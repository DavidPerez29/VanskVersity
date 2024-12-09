

let input = prompt("Introduce un arreglo de nombres (separados por comas):");
let nombres = input.split(",").map(nombre => nombre.trim());

contarLetraC(nombres);


function contarLetraC(nombres) {
    let contador = 0;

    for (let i = 0; i < nombres.length; i++) {
        let nombre = nombres[i].toLowerCase();
        for (let j = 0; j < nombre.length; j++) {
            if (nombre[j] === 'c') {
                contador++;
            }
        }
    }

    if (contador > 0) {
        console.log(`La letra "c" aparece ${contador} veces en total.`);
    } else {
        console.log('La letra "c" no aparece en ningun nombre.');
    }
}
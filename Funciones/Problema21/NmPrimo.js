

let numero = parseInt(prompt("Ingresa un numero:"));
imprimirResultado(numero);

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function imprimirResultado(numero) {
    if (esPrimo(numero)) {
        console.log(numero + " es un numero primo.");
    } else {
        console.log(numero + " no es un numero primo.");
    }
}
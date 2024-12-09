function esVocal(caracter) {
    return 'aeiouAEIOU'.includes(caracter);
}

let caracter = prompt("Ingresa un carácter:");
let resultado = esVocal(caracter);
console.log(resultado);

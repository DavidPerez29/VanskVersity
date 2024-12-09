
    let suma = 0; 
    let contador = 0; 

    while (true) {
        let numero = parseFloat(prompt("Ingresa un número (ingresa 0 para terminar):")); 
        
        if (numero === 0) {
            break; 
        }

        suma += numero; 
        contador++; 

    if (contador > 0) {
        let promedio = suma / contador; 
        console.log(`El promedio de los ${contador} números ingresados es: ${promedio}`);
    } else {
        console.log("No se ingresaron números para calcular el promedio.");
    }
}

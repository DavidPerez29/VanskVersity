
    let suma = 0; 

    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(prompt(`Ingresa el número ${i}:`)); 
        suma += numero; 
    }

    let promedio = suma / 10; 
    console.log(`El promedio de los 10 números es: ${promedio.toFixed(2)}`); 


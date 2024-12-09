
    let respuesta;
    
    do {

        respuesta = prompt("¿Deseas salir? (S/N):").toUpperCase(); 
        if (respuesta === 'S') {
            console.log("El programa se detendrá.");
            break; 
        } else if (respuesta === 'N') {
            console.log("El programa continuará...");
        } else {
            console.log("Por favor, ingresa solo 'S' o 'N'.");
        }
    } while (respuesta !== 'S'); 


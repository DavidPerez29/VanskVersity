

let palabraBase = prompt("Ingresa una palabra base para la contraseña:");
let contraseña = generarContraseña(palabraBase);
imprimirContraseña(contraseña);



function generarContraseña(palabraBase) {
    
    let numeroAleatorio = Math.floor(Math.random() * 99) + 1;
    
  
    let caracteresEspeciales = "!@#$%^&*()_+";
    let caracterAleatorio = caracteresEspeciales.charAt(Math.floor(Math.random() * caracteresEspeciales.length));
    
    
    let contraseña = palabraBase + numeroAleatorio + caracterAleatorio;
    
    return contraseña;
}

function imprimirContraseña(contraseña) {
    console.log("La contraseña generada es: " + contraseña);
}

let longitud = parseInt(prompt("Ingresa la longitud de la contraseña:"));
let contraseñaGenerada = generarContraseña(longitud);
console.log("La contraseña generada es:", contraseñaGenerada);


function generarContraseña(n) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/';
    let contraseña = '';
    
    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[randomIndex];
    }   
    return contraseña;
}

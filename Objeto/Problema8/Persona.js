let objeto = {
    162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
    4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
    786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
};

for (let id in objeto) {
    let persona = objeto[id];
    for (let clave in persona) {
        console.log(clave + ": " + persona[clave]);
    }
    console.log("------------------")
}



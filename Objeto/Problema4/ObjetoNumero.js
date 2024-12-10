let objeto = {dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50};

for (let clave in objeto) {
    if (objeto[clave] % 2 === 0) {
        console.log(clave + ": " + objeto[clave]);
    }
}

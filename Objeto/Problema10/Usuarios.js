/**
 * Cree un programa que almacene los documentos y nombres de diez usuarios, donde a
cada documento corresponda su respectivo nombre. Imprima todos los nombres de los
usuarios usando ciclos.
 */


let usuarios = {
    "12345678": "Carlos Mendoza",
    "23456789": "Lucia Fernandez",
    "34567890": "Miguel Rojas",
    "45678901": "Sofia Alvarez",
    "56789012": "Gabriel Castro",
    "67890123": "Laura Jimenez",
    "78901234": "Javier Morales",
    "89012345": "Patricia Ruiz",
    "90123456": "Antonio Vela",
    "10234567": "Isabel Torres"
};

// Recorrer los documentos del objeto y mostrar los nombres
for (let documento in usuarios) {
    console.log(usuarios[documento]);
}
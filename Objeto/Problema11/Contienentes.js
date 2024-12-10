/**
 * 
 * Cree un programa que solicite al usuario el nombre de uno de los cinco continentes,
luego, muestre cinco países del continente seleccionado por el usuario, estos paises deben
ser elementos de un arreglo.
 */


let continentes = {
    "Asia": ["China", "India", "Japon", "Corea del Sur", "Indonesia"],
    "Europa": ["España", "Francia", "Italia", "Alemania", "Reino Unido"],
    "Africa": ["Nigeria", "Egipto", "Sudáfrica", "Kenia", "Etiopia"],
    "América": ["Estados Unidos", "Brasil", "Mexico", "Argentina", "Canada"],
    "Oceania": ["Australia", "Nueva Zelanda", "Fiji", "Papua Nueva Guinea", "Samoa"]
};


let continenteElegido = prompt("Ingresa el nombre de un continente (Asia, Europa, Africa, America, Oceania):");


if (continentes[continenteElegido]) {
   
    alert("Los paises en " + continenteElegido + " son: " + continentes[continenteElegido]+ ", ");
} else {
   
    alert("Continente no valido. Por favor, ingresa un continente válido.");
}
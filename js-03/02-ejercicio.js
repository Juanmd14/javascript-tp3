//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'

let ciudades = [];
let ciudad = prompt(
  "Ingrese el nombre de una ciudad (Cancelar para finalizar)"
);

while (ciudad !== null) {
  ciudades.push(ciudad);
  ciudad = prompt("Ingrese el nombre de otra ciudad (Cancelar para finalizar)");
}

//Mostrar el arreglo
console.log(ciudades);

//Longitud del arreglo
document.writeln(
  `<p>La cantidad de ciudades ingresadas es: ${ciudades.length}</p>`
);

//Mostrar ciudades en determinadas posiciones
document.writeln(
  `<p>El elemento en la primera posición es: ${ciudades[0]}</p>`
);
document.writeln(
  `<p>El elemento en la tercera posición es: ${ciudades[2]}</p>`
);
document.writeln(
  `<p>El elemento en la última posición es: ${
    ciudades[ciudades.length - 1]
  }</p>`
);

ciudades.map((ciudad) => document.writeln(`<p>Ciudad: ${ciudad}</p>`));

//Añadir Paris como última ciudad
ciudades.push("Paris");

document.write("<p>Se agrego Paris</p>");
ciudades.map((ciudad) => document.writeln(`<p>Ciudad: ${ciudad}</p>`));

document.writeln(
  `<p>El elemento en la segunda posición es: ${ciudades[1]}</p>`
);

 ciudades[1] = "Barcelona";
 ciudades.splice(1, 1, "Barcelona");

document.write("<p>Se agrego Barcelona en la segunda posición</p>");
ciudades.map((ciudad) => document.writeln(`<p>Ciudad: ${ciudad}</p>`));

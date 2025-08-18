//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'

let ciudades = [];
let ciudad;

while (true) {
  ciudad = prompt("Ingresa nombre de ciudades");
  if (ciudad === null) break;

  ciudad = ciudad.trim();
  if (ciudad !== "") {
    ciudades.push(ciudad);
  }
}

// longitud

document.write(
  `<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`
);

// posiciones 1, 3 y ultima
document.write(`<ul><li>Elemento 1er posicion: ${ciudades[0]}</li>`);
document.write(`<li>Elemento 3er posicion: ${ciudades[2]}</li>`);
document.write(`<li>Elemento ultima posicion: ${ciudades[ciudades.length - 1]}</li></ul>`);

// añadir paris

ciudades.push('Paris');
document.write(`Elemento ultima posicion: ${ciudades[ciudades.length - 1]}`);

// elemento en segunda posicion

document.write(`<p>${ciudades[1]} es el segundo elemento</p>`)

// sustituir segundo elemento por Barcelona

    if (ciudades.length >= 2) {
            ciudades[1] = "Barcelona";
            document.write(`<p>Ahora ${ciudades[1]} es el segundo elemento</p>`);
        } else {
            document.write("<p>No se puede sustituir</p>");
        }


// arreglo de ciudades 
        document.write("<h1>Arreglo de ciudades</h1>");

document.write("<ul>");

for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>Elemento: ${ciudades[i]}</li>`);
}

document.write("</ul>");





// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)
// Ejemplo:
//Input:
//lado A = 24
//lado B = 5

let rectangulo1 = parseFloat(prompt('Ingrese el valor del lado A del rectangulo'))
let rectangulo2 = parseFloat(prompt('Ingrese el valor del lado B del rectangulo'))

const perimetro = (rectangulo1,rectangulo2) => {
   return 2 * (rectangulo1 + rectangulo2);
}

// comprobar si se ingreso algo

if (!rectangulo1 || !rectangulo2 || rectangulo1 <= 0 || rectangulo2 <= 0) {  // Verifica si los numeros son invalidos o si son negativos.
    document.write("ingresa un valor valido y que no sea negativo");
} else {
    document.write(`El perimetro es: ${perimetro(rectangulo1, rectangulo2)}`);
}
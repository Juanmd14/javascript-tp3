//7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

let numero = parseInt(prompt("Ingresa un numero para realizar la tabla"));

const tabla = (numero) => {
    if (isNaN(numero)) {
        document.write("Ingresa un numero valido");
        return;
    }

    document.write(`<h1>Tabla de multiplicar del ${numero}</h1>`);
    document.write(" <table border='1'> <tr><th>Multiplicacionn</th><th>Resultado</th></tr>");  // abro tabla con un borde, y creo las columnas

    for (let i = 1; i <= 10; i++) {
        document.write(`<tr><td>${numero} x ${i}</td><td>${numero * i}</td></tr>`);         //agrego filas con for
    }
    document.write("</table>")  // cierro la tabla
};


tabla(numero);



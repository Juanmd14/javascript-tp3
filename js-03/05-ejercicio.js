// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


const textoCadena = (texto) => {
  if (!texto || texto.trim() === "") {   //verificar si es nulo o esta vacio.
    console.log("Texto invalido");       
    return;
  }
  texto = texto.trim();    // quitar espacios con trim
  
  if (texto == texto.toUpperCase()) {
    console.log(`el texto ${texto} tiene solo mayusculas`);
  } else if (texto == texto.toLowerCase()) {
    console.log(`el texto ${texto} solo tiene minusculas`);
  } else {
    console.log(`El texto ${texto} tiene mayusculas y minusculas`);
  }
};

// test

let entrada = prompt("Escriba un texto");
textoCadena(entrada);  // le paso a la funcion, el prompt.
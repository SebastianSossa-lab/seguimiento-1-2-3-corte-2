function NumeroParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
    } else {
        console.log("El número " + numero + " es impar.");
    }
}

let numeroIngresado = prompt("Ingrese un numero para verificar si es par o impar: ");

NumeroParOImpar(numeroIngresado);
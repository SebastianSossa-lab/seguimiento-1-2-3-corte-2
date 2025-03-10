function NumeroParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
    } else {
        console.log("El número " + numero + " es impar.");
    }
}

for (let i = 0; i < 5; i++) {
    let numeroIngresado = parseInt(prompt("Ingrese un número para verificar si es par o impar:"));
    NumeroParOImpar(numeroIngresado);
}

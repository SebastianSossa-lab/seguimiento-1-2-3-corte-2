function NumeroParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
    } else {
        console.log("El número " + numero + " es impar.");
    }
}

function ejecutarVerificacion(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        let numeroIngresado = parseInt(prompt(`Intento ${i + 1}: Ingrese un número para verificar si es par o impar:`));
        NumeroParOImpar(numeroIngresado);
    }
}

ejecutarVerificacion(5); 

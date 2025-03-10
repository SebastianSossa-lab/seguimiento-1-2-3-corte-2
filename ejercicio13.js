let operador = prompt("Ingrese su operador (claro, tigo, movistar):");

let cargos = {
    "tigo": {
        "cargoFijo": 45000,
        "valorMinutoInternacional": 200,
        "valorPaqueteDatos": 12000
    },
    "claro": {
        "cargoFijo": 30000,
        "valorMinutoInternacional": 100,
        "valorPaqueteDatos": 18000
    },
    "movistar": {
        "cargoFijo": 40000,
        "valorMinutoInternacional": 250,
        "valorPaqueteDatos": 8000
    }
};

let mensaje;

if (cargos[operador]) {
    const { cargoFijo, valorMinutoInternacional, valorPaqueteDatos } = cargos[operador];

    mensaje = `Operador: ${operador}\n`;
    mensaje += `Cargo fijo: ${cargoFijo}\n`;
    mensaje += `Valor minuto internacional: ${valorMinutoInternacional}\n`;
    mensaje += `Valor paquete de datos: ${valorPaqueteDatos}`;
} else {
    mensaje = "Operador no válido. Por favor, ingrese 'claro', 'tigo' o 'movistar'.";
}

console.log(mensaje);
alert(mensaje);




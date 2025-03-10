let intentos = parseInt(prompt("¿Cuántas computadoras desea diagnosticar?"));

for (let i = 0; i < intentos; i++) {
    let emitePitido = prompt(`Computadora ${i + 1}: ¿La computadora emite un pitido al iniciarse? (si/no)`).toLowerCase();
    let discoDuroGira = prompt(`Computadora ${i + 1}: ¿El disco duro gira? (si/no)`).toLowerCase();
    let estadoComputadora;

    if (emitePitido === "si" && discoDuroGira === "si") {
        estadoComputadora = "Póngase en contacto con el técnico de apoyo.";
    } else if (emitePitido === "si" && discoDuroGira === "no") {
        estadoComputadora = "Verificar contactos de la unidad.";
    } else if (emitePitido === "no" && discoDuroGira === "no") {
        estadoComputadora = "Traiga la computadora para repararla en la central.";
    } else if (emitePitido === "no" && discoDuroGira === "si") {
        estadoComputadora = "Compruebe las conexiones de altavoces.";
    } else {
        estadoComputadora = "Entrada no válida. Por favor, responda con 'si' o 'no'.";
    }

    alert(`Computadora ${i + 1}: ${estadoComputadora}`);
    console.log(`Computadora ${i + 1}: ${estadoComputadora}`);
}

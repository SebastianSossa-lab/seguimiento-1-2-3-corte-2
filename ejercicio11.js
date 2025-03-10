let emitePitido = prompt("¿La computadora emite un pitido al iniciarse? (sí/no)");
let discoDuroGira = prompt("¿El disco duro gira? (si/no)");

let estadoComputadora;

if (emitePitido === "si" && discoDuroGira === "si") {
    estadoComputadora = alert("Póngase en contacto con el técnico de apoyo.");
} else if (emitePitido === "si" && discoDuroGira === "no") {
    estadoComputadora = alert("Verificar contactos de la unidad.");
} else if (emitePitido === "no" && discoDuroGira === "no") {
    estadoComputadora = alert("Traiga la computadora para repararla en la central.");
} else if (emitePitido === "no" && discoDuroGira === "si") {
    estadoComputadora = alert("Compruebe las conexiones de altavoces.");
} else {
    estadoComputadora = alert("Entrada no válida. Por favor, responda con 'si' o 'no'.");
}


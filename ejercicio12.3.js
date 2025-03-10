function verificarAutomovil(numeroAutomovil, indice) {
    if (numeroAutomovil === 119 || numeroAutomovil === 179 || 
        (numeroAutomovil >= 189 && numeroAutomovil <= 195) || 
        numeroAutomovil === 221 || numeroAutomovil === 780) {
        alert(`Automóvil ${indice}: El automóvil está defectuoso, llevar a garantía.`);
    } else {
        alert(`Automóvil ${indice}: Su automóvil no está defectuoso.`);
    }
}

let cantidadAutomoviles = parseInt(prompt("¿Cuántos automóviles desea verificar?"));

for (let i = 0; i < cantidadAutomoviles; i++) {
    let numeroAutomovil = parseInt(prompt(`Automóvil ${i + 1}: Ingrese el número de su automóvil:`));

    verificarAutomovil(numeroAutomovil, i + 1);
}

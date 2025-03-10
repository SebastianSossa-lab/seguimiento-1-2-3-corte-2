let cantidadAutomoviles = parseInt(prompt("¿Cuántos automóviles desea verificar?"));

for (let i = 0; i < cantidadAutomoviles; i++) {
    let numeroAutomovil = parseInt(prompt(`Automóvil ${i + 1}: Ingrese el número de su automóvil:`));
    
    if (numeroAutomovil === 119 || numeroAutomovil === 179 || 
        (numeroAutomovil >= 189 && numeroAutomovil <= 195) || 
        numeroAutomovil === 221 || numeroAutomovil === 780) {
        alert(`Automóvil ${i + 1}: El automóvil está defectuoso, llevar a garantía.`);
    } else {
        alert(`Automóvil ${i + 1}: Su automóvil no está defectuoso.`);
    }
}

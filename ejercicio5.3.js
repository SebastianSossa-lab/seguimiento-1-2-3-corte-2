function calcularCalificacion(calificaciones) {
    let totalCalificaciones = 0;

    for (let i = 0; i < calificaciones.length; i++) {
        totalCalificaciones += calificaciones[i];
    }

    let porcentajeFinal = (totalCalificaciones / 50) * 100;

    let calificacionCualitativa;
    if (porcentajeFinal >= 0 && porcentajeFinal <= 59.9) {
        calificacionCualitativa = "Mala";
    } else if (porcentajeFinal >= 60 && porcentajeFinal <= 80) {
        calificacionCualitativa = "Buena";
    } else if (porcentajeFinal > 80) {
        calificacionCualitativa = "Excelente";
    }

    console.log(`Tu porcentaje es ${porcentajeFinal}% y tu calificación es ${calificacionCualitativa}.`);
}

let calificaciones = [9, 7, 8, 6, 7];
calcularCalificacion(calificaciones);

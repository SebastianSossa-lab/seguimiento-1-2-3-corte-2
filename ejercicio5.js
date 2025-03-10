let fisica = 9;
let quimica = 7;
let biologia = 8;
let matematicas = 6;
let informatica = 7;

let TotalCalificaciones = fisica + quimica + biologia + matematicas + informatica;
let porcentajeFinal = (sumaCalificaciones / 50) * 100;

let calificacionCualitativa;

if (porcentajeFinal >= 0 && porcentajeFinal <= 59.9) {
    calificacionCualitativa = "Mala";
} else if (porcentajeFinal >= 60 && porcentajeFinal <= 80) {
    calificacionCualitativa = "Buena";
} else if (porcentajeFinal > 80) {
    calificacionCualitativa = "Excelente";
}

console.log("Tu porcentaje es " + porcentajeFinal + "% y tu calificación es " + calificacionCualitativa + ".");